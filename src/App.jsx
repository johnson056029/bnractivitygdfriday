import { useEffect, useState } from 'react'
import './App.css'
import { pagesConfig } from './pagesConfig.js'

function ScrollSection({ id, backgroundImage, title, subtitle, comics = [], layout, sectionHeight, prevBackground, nextBackground }) {
  return (
    <section 
      className="scroll-section" 
      id={id}
      style={{ minHeight: sectionHeight ? `${sectionHeight}px` : '100vh' }}
    >
      <div 
        className="section-background" 
        style={{ 
          background: backgroundImage ? `url(${backgroundImage}) center/cover no-repeat` : 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Transition overlay - shows reflections from adjacent pages */}
      <div className="transition-overlay">
        {prevBackground && (
          <div 
            className="prev-page-reflection" 
            style={{ 
              background: `url(${prevBackground}) center/cover no-repeat`,
              backgroundPosition: 'center bottom'
            }}
          ></div>
        )}
        {nextBackground && (
          <div 
            className="next-page-reflection" 
            style={{ 
              background: `url(${nextBackground}) center/cover no-repeat`,
              backgroundPosition: 'center top'
            }}
          ></div>
        )}
      </div>
      
      <div className="content-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>
      </div>
      {/* Floating comic images - dynamic count and positioning */}
      {comics.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Comic ${index + 1}`}
          className={`floating-comic comic-${index + 1} layout-${layout}`}
          data-layout={layout}
          data-index={index}
          data-total={comics.length}
        />
      ))}
    </section>
  )
}

function App() {
  const [imageDimensions, setImageDimensions] = useState({})
  const [viewportWidth, setViewportWidth] = useState(1920)

  useEffect(() => {
    // Load image dimensions for height calculation
    const loadImageDimensions = async () => {
      const dimensions = {}
      for (const page of pagesConfig) {
        try {
          const img = new Image()
          img.src = page.background
          await new Promise((resolve, reject) => {
            img.onload = () => {
              dimensions[page.id] = {
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio: img.naturalWidth / img.naturalHeight
              }
              resolve()
            }
            img.onerror = reject
          })
        } catch (error) {
          console.warn(`Failed to load image dimensions for ${page.id}:`, error)
          // Fallback dimensions
          dimensions[page.id] = {
            width: 1920,
            height: 1080,
            aspectRatio: 16/9
          }
        }
      }
      setImageDimensions(dimensions)
    }

    loadImageDimensions()
  }, [])

  useEffect(() => {
    // Update viewport width on resize
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateViewportWidth)
    updateViewportWidth() // Initial call

    return () => window.removeEventListener('resize', updateViewportWidth)
  }, [])

  useEffect(() => {
    // Dynamic positioning of comics based on background height and count
    const positionComics = () => {
      const sections = document.querySelectorAll('.scroll-section')
      
      sections.forEach(section => {
        const comics = section.querySelectorAll('.floating-comic')
        if (comics.length === 0) return

        const sectionHeight = section.offsetHeight
        const layout = comics[0].getAttribute('data-layout')
        const isMobile = window.innerWidth < 768

        comics.forEach((comic, index) => {
          const img = comic
          
          // Calculate vertical position based on background height and comic count
          let verticalPosition
          if (isMobile) {
            // Mobile: distribute evenly across the height
            const spacing = sectionHeight / (comics.length + 1)
            verticalPosition = spacing * (index + 1)
          } else {
            // Desktop: distribute based on layout
            if (layout === 'left') {
              verticalPosition = (sectionHeight / (comics.length + 1)) * (index + 1)
            } else {
              verticalPosition = (sectionHeight / (comics.length + 1)) * (index + 1)
            }
          }

          // Set position
          img.style.top = `${verticalPosition}px`
          
          // Set horizontal position based on layout
          if (isMobile) {
            img.style.left = '50%'
            img.style.right = 'auto'
          } else {
            if (layout === 'left') {
              img.style.left = '0px'
              img.style.right = 'auto'
            } else {
              img.style.right = '0px'
              img.style.left = 'auto'
            }
          }
          
          // Set size - larger images as requested
          if (isMobile) {
            img.style.width = '95vw'
            img.style.maxWidth = '380px'
          } else {
            // For desktop, ensure images don't exceed viewport bounds with some margin
            const maxWidth = layout === 'left' ? '80vw' : '80vw' // Allow up to 80% of viewport width for safety
            img.style.width = maxWidth
            img.style.maxWidth = '750px' // Increased max width
          }
          img.style.height = 'auto'

          // Set initial 3D transform with slight random variation
          const baseRotationX = (Math.random() - 0.5) * 10
          const baseRotationY = (Math.random() - 0.5) * 10
          const baseRotationZ = (Math.random() - 0.5) * 4
          
          if (isMobile) {
            img.style.transform = `translateX(-50%) translateZ(0px) rotateX(${baseRotationX}deg) rotateY(${baseRotationY}deg) rotateZ(${baseRotationZ}deg)`
          } else {
            img.style.transform = `translateZ(0px) rotateX(${baseRotationX}deg) rotateY(${baseRotationY}deg) rotateZ(${baseRotationZ}deg)`
          }
        })
      })
    }

    // Position comics after images load
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('.floating-comic')
      let loadedCount = 0
      
      images.forEach(img => {
        if (img.complete) {
          loadedCount++
        } else {
          img.addEventListener('load', () => {
            loadedCount++
            if (loadedCount === images.length) {
              positionComics()
            }
          })
        }
      })
      
      if (loadedCount === images.length && images.length > 0) {
        positionComics()
      }
    }

    // Initial positioning
    checkImagesLoaded()
  }, [])

  useEffect(() => {
    if (pagesConfig.length === 0) return

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.section-background')
      
      parallaxElements.forEach((element) => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`
      })

      // Enhanced 3D effect for comic images based on scroll - like scattered photos on a desk
      const comicElements = document.querySelectorAll('.floating-comic')
      comicElements.forEach((element, index) => {
        const section = element.closest('.scroll-section')
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const scrollProgress = Math.max(0, Math.min(1, (scrolled - sectionTop + window.innerHeight * 0.5) / sectionHeight))
        
        // Get current transform values
        const computedStyle = window.getComputedStyle(element)
        const currentTransform = computedStyle.transform
        
        // Dynamic 3D transformations based on scroll
        const translateZ = scrollProgress * 40 + 10 // 10-50px depth
        const rotateX = scrollProgress * 8 // Add dynamic tilt
        const rotateY = scrollProgress * 12 // More rotation on Y axis
        const rotateZ = scrollProgress * 3 // Slight Z rotation
        
        // Add subtle floating motion
        const floatY = Math.sin(scrollProgress * Math.PI) * 15
        
        // Different transform for mobile vs desktop
        const isMobile = window.innerWidth < 768
        if (isMobile) {
          // Mobile: maintain centered positioning with 3D effects
          element.style.transform = `translateX(-50%) translateY(${floatY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        } else {
          // Desktop: maintain side positioning with 3D effects
          const layout = element.getAttribute('data-layout')
          if (layout === 'left') {
            element.style.transform = `translateY(${floatY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          } else {
            element.style.transform = `translateY(${floatY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          }
        }
      })

      // Handle page transition reflections
      const sections = document.querySelectorAll('.scroll-section')
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const scrollProgress = Math.max(0, Math.min(1, (scrolled - sectionTop + window.innerHeight * 0.5) / sectionHeight))
        
        // Control reflection opacity based on scroll progress
        const prevReflection = section.querySelector('.prev-page-reflection')
        const nextReflection = section.querySelector('.next-page-reflection')
        
        if (prevReflection) {
          // Previous page reflection fades out as we scroll into this section
          const prevOpacity = Math.max(0, 1 - scrollProgress * 2)
          prevReflection.style.opacity = prevOpacity
        }
        
        if (nextReflection) {
          // Next page reflection fades in as we approach the end of this section
          const nextOpacity = Math.max(0, (scrollProgress - 0.5) * 2)
          nextReflection.style.opacity = nextOpacity
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    // Trigger initial calculation
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {pagesConfig.map((page, index) => {
        const dimensions = imageDimensions[page.id]
        // Calculate section height based on background image aspect ratio
        // Use viewport width and image aspect ratio to determine height
        const sectionHeight = dimensions ? (viewportWidth / dimensions.aspectRatio) * 1.2 : window.innerHeight // 1.2x for some padding

        // Get previous and next page backgrounds for transition effects
        const prevPage = index > 0 ? pagesConfig[index - 1] : null
        const nextPage = index < pagesConfig.length - 1 ? pagesConfig[index + 1] : null

        return (
          <ScrollSection
            key={page.id}
            id={page.id}
            backgroundImage={page.background}
            title={page.title}
            subtitle={page.subtitle}
            comics={page.comics}
            layout={page.layout}
            sectionHeight={sectionHeight}
            prevBackground={prevPage?.background}
            nextBackground={nextPage?.background}
          />
        )
      })}
    </div>
  )
}

export default App
