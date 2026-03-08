#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const vectorsDir = path.join(__dirname, '..', 'public', 'vectors')
const configPath = path.join(__dirname, '..', 'src', 'pagesConfig.js')

// Default titles, subtitles, and layout for pages
const defaultContent = {
  page1: {
    title: '',
    subtitle: '',
    layout: 'left' // 'left' or 'right'
  },
  page2: {
    title: 'Chapter 1: Departure',
    subtitle: 'The beginning of our adventure',
    layout: 'right'
  },
  page3: {
    title: 'Chapter 2: The Crossing',
    subtitle: 'Navigating through challenges',
    layout: 'left'
  },
  page4: {
    title: 'Chapter 3: Discovery',
    subtitle: 'Finding what we seek',
    layout: 'right'
  },
  page5: {
    title: 'Chapter 4: Return',
    subtitle: 'Coming home changed',
    layout: 'left'
  }
}

function generatePagesConfig() {
  try {
    // Read all directories in vectors folder
    const pages = fs.readdirSync(vectorsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .sort() // Sort to ensure consistent order

    const config = pages.map(pageId => {
      const pageDir = path.join(vectorsDir, pageId)
      const files = fs.readdirSync(pageDir)

      // Find background image
      const backgroundFile = files.find(file => file.startsWith('background.'))
      const background = backgroundFile ? `/vectors/${pageId}/${backgroundFile}` : null

      // Find comic images (sorted numerically)
      const comicFiles = files
        .filter(file => file.startsWith('comic') && file.endsWith('.jpg'))
        .sort((a, b) => {
          const aNum = parseInt(a.match(/comic(\d+)/)?.[1] || 0)
          const bNum = parseInt(b.match(/comic(\d+)/)?.[1] || 0)
          return aNum - bNum
        })
        .map(file => `/vectors/${pageId}/${file}`)

      // Get title, subtitle, and layout
      const content = defaultContent[pageId] || {
        title: `Page ${pageId.replace('page', '')}`,
        subtitle: 'A new chapter begins',
        layout: 'left'
      }

      return {
        id: pageId,
        title: content.title,
        subtitle: content.subtitle,
        layout: content.layout,
        background,
        comics: comicFiles
      }
    })

    // Generate the config file content
    const configContent = `// Auto-generated page configuration
// This file is automatically updated when new pages are added to public/vectors/
// Run: node scripts/generatePages.js

export const pagesConfig = ${JSON.stringify(config, null, 2)}

// Helper function to get page by ID
export const getPageById = (id) => pagesConfig.find(page => page.id === id)

// Helper function to get all page IDs
export const getAllPageIds = () => pagesConfig.map(page => page.id)
`

    // Write the config file
    fs.writeFileSync(configPath, configContent, 'utf8')
    console.log(`✅ Generated pagesConfig.js with ${config.length} pages:`)
    config.forEach(page => {
      console.log(`  - ${page.id}: ${page.comics.length} comics`)
    })

  } catch (error) {
    console.error('❌ Error generating pages config:', error.message)
    process.exit(1)
  }
}

// Run the generator
generatePagesConfig()