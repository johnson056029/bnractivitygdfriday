import { useEffect, useState, useRef } from 'react'
import './App.css'
import { pagesConfig } from './pagesConfig.js'

// ── Music Player ──────────────────────────────────────────────────
function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('sound/cello.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5
    return () => {
      audioRef.current.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(p => !p)
  }

  return (
    <button
      className={`music-btn ${playing ? 'music-playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? '暫停音樂' : '播放音樂'}
      title={playing ? '暫停音樂' : '播放音樂'}
    >
      {playing ? (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )}
    </button>
  )
}

const SLOT_HEIGHT = 800

// 散落式版面：各圖的水平位置、寬度、旋轉、垂直偏移
const LAYOUTS = [
  { leftPct: 5, widthVw: 46, rz: -3, yJitter: 0 },
  { leftPct: 52, widthVw: 38, rz: 2, yJitter: 60 },
  { leftPct: 14, widthVw: 42, rz: -5, yJitter: -30 },
  { leftPct: 55, widthVw: 44, rz: 4, yJitter: 40 },
  { leftPct: 8, widthVw: 36, rz: -2, yJitter: -50 },
  { leftPct: 48, widthVw: 50, rz: 3, yJitter: 80 },
  { leftPct: 20, widthVw: 48, rz: -6, yJitter: 20 },
  { leftPct: 58, widthVw: 36, rz: 5, yJitter: -20 },
  { leftPct: 10, widthVw: 44, rz: -4, yJitter: 50 },
  { leftPct: 44, widthVw: 40, rz: 2, yJitter: -10 },
  { leftPct: 25, widthVw: 38, rz: -3, yJitter: 70 },
  { leftPct: 60, widthVw: 42, rz: 6, yJitter: -40 },
]

// ── Navigation Bar ───────────────────────────────────────────────
function NavBar({ currentChapter }) {
  const chapters = pagesConfig.filter(p => p.chapterNumber > 0)
  const current = chapters.find(p => p.chapterNumber === currentChapter)
  return (
    <nav className="nav-bar">
      <div className="nav-brand">✝&ensp;苦路</div>
      <div className="nav-current">
        {currentChapter === 0 ? '耶穌受難之路' : current?.title}
      </div>
      <MusicPlayer />
    </nav>
  )
}

// ── Chapter Progress Dots ────────────────────────────────────────
function ChapterDots({ currentChapter }) {
  const chapters = pagesConfig.filter(p => p.chapterNumber > 0)
  return (
    <div className="chapter-dots">
      {chapters.map(p => (
        <a
          key={p.id}
          href={`#${p.id}`}
          className={`chapter-dot ${currentChapter === p.chapterNumber ? 'active' : ''}`}
          title={p.title}
          aria-label={p.title}
        />
      ))}
    </div>
  )
}

// ── Cover Section ────────────────────────────────────────────────
function CoverSection() {
  const cover = pagesConfig[0]
  return (
    <section className="cover-section" id="cover">
      {cover.background && (
        <div
          className="section-background"
          style={{
            background: `url(${cover.background}) center/cover no-repeat`,
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      <div className="cover-overlay" />
      <div className="cover-content">
        <div className="cover-cross">✝</div>
        <h1 className="cover-title">苦路</h1>
        <div className="cover-rule" />
        <p className="cover-subtitle">耶穌受難之路</p>
        <p className="cover-desc">
          一個關於苦難、相遇與愛的故事<br />
          在死亡之前，有一條必須走完的路
        </p>
        <a href="#section1" className="cover-cta">開始閱讀</a>
      </div>
    </section>
  )
}

// ── Chapter Section ──────────────────────────────────────────────
function ChapterSection({ page, sectionHeight }) {
  const chars = page.body ? [...page.body] : []
  return (
    <section
      className="scroll-section"
      id={page.id}
      style={{ minHeight: `${sectionHeight}px` }}
    >
      {page.background && (
        <div
          className="section-background"
          style={{
            background: `url(${page.background}) center/cover no-repeat`,
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      <div className="section-overlay" />

      <div className="content-overlay">
        <div className="chapter-text">
          <h2 className="chapter-title reveal">{page.title}</h2>
          <p className="chapter-subtitle reveal">{page.subtitle}</p>
          {chars.length > 0 && (
            <p className="chapter-body" aria-label={page.body}>
              {chars.map((char, i) => (
                <span key={i} className="char-span">{char}</span>
              ))}
            </p>
          )}
        </div>
      </div>

      {page.comics.map((comic, index) => (
        <img
          key={index}
          src={comic.src}
          alt={`${page.title} 插圖${index + 1}`}
          className="floating-comic"
          data-index={index}
          data-scale={comic.scale}
        />
      ))}
    </section>
  )
}

// ── App ──────────────────────────────────────────────────────────
function App() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const progressBarRef = useRef(null)

  // ① Track current chapter
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const page = pagesConfig.find(p => p.id === e.target.id)
          if (page !== undefined) setCurrentChapter(page.chapterNumber)
        }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // ② Title / subtitle slide-in
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.22}s`
            el.classList.add('visible')
          })
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.scroll-section').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // ③ Position comics with scattered layout
  useEffect(() => {
    const position = () => {
      document.querySelectorAll('.scroll-section').forEach(section => {
        const comics = section.querySelectorAll('.floating-comic')
        if (!comics.length) return

        const isMobile = window.innerWidth < 768
        const topOffset = 340

        comics.forEach((comic, i) => {
          const layout = LAYOUTS[i % LAYOUTS.length]
          const top = topOffset + i * SLOT_HEIGHT + layout.yJitter
          comic.style.top = `${top}px`

          if (isMobile) {
            comic.style.left = '50%'
            comic.style.right = 'auto'
            comic.style.width = '86vw'
            comic.style.maxWidth = '420px'
            comic.style.setProperty('--enter-tx', '-50%')
            comic.style.setProperty('--enter-ty', '30px')
            comic.style.setProperty('--settled-tx', '-50%')
          } else {
            const scale = parseFloat(comic.dataset.scale) || 1.0
            comic.style.left = `${layout.leftPct}%`
            comic.style.right = 'auto'
            comic.style.width = `${layout.widthVw * scale}vw`
            comic.style.maxWidth = `${740 * scale}px`
            comic.style.setProperty('--enter-tx', '0px')
            comic.style.setProperty('--enter-ty', '35px')
            comic.style.setProperty('--settled-tx', '0px')
          }
          comic.style.height = 'auto'

          const rx = (Math.random() - 0.5) * 4
          const ry = (Math.random() - 0.5) * 4
          comic.style.setProperty('--base-rx', `${rx}deg`)
          comic.style.setProperty('--base-ry', `${ry}deg`)
          comic.style.setProperty('--base-rz', `${layout.rz}deg`)
        })

        // Entrance animation via IntersectionObserver
        const comicObs = new IntersectionObserver(
          entries => entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('comic-visible')
              comicObs.unobserve(e.target)
            }
          }),
          { threshold: 0.04 }
        )
        comics.forEach(c => comicObs.observe(c))
      })
    }

    const imgs = document.querySelectorAll('.floating-comic')
    if (!imgs.length) return
    let loaded = 0
    const done = () => { if (++loaded === imgs.length) position() }
    imgs.forEach(img => img.complete ? done() : img.addEventListener('load', done, { once: true }))
    setTimeout(position, 80)
  }, [])

  // ④ Scroll: progress bar + backdrop blur + char reveal + 3D float
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const vp = window.innerHeight

      // Progress bar
      if (progressBarRef.current) {
        const pct = scrolled / (document.body.scrollHeight - vp) * 100
        progressBarRef.current.style.width = `${pct.toFixed(2)}%`
      }

      // Backdrop blur at section boundaries
      const fadeZone = vp * 0.85
      document.querySelectorAll('.scroll-section, .cover-section').forEach(section => {
        const overlay = section.querySelector('.section-overlay, .cover-overlay')
        if (!overlay) return
        const top = section.offsetTop
        const height = section.offsetHeight
        const fromTop = scrolled - top
        const fromBottom = (top + height) - (scrolled + vp)
        let blur = 0
        if (fromTop >= 0 && fromTop < fadeZone) blur = 22 * (1 - fromTop / fadeZone)
        if (fromBottom >= 0 && fromBottom < fadeZone) blur = Math.max(blur, 22 * (1 - fromBottom / fadeZone))
        const bv = `blur(${blur.toFixed(1)}px)`
        overlay.style.backdropFilter = bv
        overlay.style.webkitBackdropFilter = bv
      })

      // Character-by-character body text reveal
      document.querySelectorAll('.scroll-section').forEach(section => {
        const spans = section.querySelectorAll('.char-span')
        if (!spans.length) return
        const progress = Math.max(0, Math.min(1,
          (scrolled - (section.offsetTop - vp * 0.2)) / (vp * 2.5)
        ))
        spans.forEach((span, i) => {
          const threshold = (i / spans.length) * 0.88
          span.style.opacity = progress > threshold
            ? Math.min(1, (progress - threshold) / 0.1)
            : 0.08
        })
      })

      // 3D float for comics
      document.querySelectorAll('.floating-comic').forEach(el => {
        if (!el.classList.contains('comic-visible')) return
        const section = el.closest('.scroll-section')
        if (!section) return
        const progress = Math.max(0, Math.min(1,
          (scrolled - section.offsetTop + vp * 0.5) / section.offsetHeight
        ))
        const tz = progress * 20 + 5
        const rx = progress * 3
        const ry = progress * 6
        const rz = progress * 1.2
        const fy = Math.sin(progress * Math.PI) * 10
        const isMobile = window.innerWidth < 768
        const tx = el.style.getPropertyValue('--settled-tx') || '0px'
        el.style.transform = isMobile
          ? `translateX(${tx}) translateY(${fy}px) translateZ(${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
          : `translateY(${fy}px) translateZ(${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const chapters = pagesConfig.filter(p => p.chapterNumber > 0)

  return (
    <div className="app">
      <div className="progress-bar" ref={progressBarRef} />
      <NavBar currentChapter={currentChapter} />
      <ChapterDots currentChapter={currentChapter} />
      {chapters.map(page => {
        const maxJitter = Math.max(...LAYOUTS.map(l => l.yJitter))
        const sectionHeight = Math.max(
          window.innerHeight,
          340 + page.comics.length * SLOT_HEIGHT + maxJitter + 300
        )
        return (
          <ChapterSection key={page.id} page={page} sectionHeight={sectionHeight} />
        )
      })}
    </div>
  )
}

export default App
