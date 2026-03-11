#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const vectorsDir = path.join(__dirname, '..', 'public', 'vectors')
const configPath = path.join(__dirname, '..', 'src', 'pagesConfig.js')

// 苦路三段敘事預設內容
const defaultContent = {
  cover: {
    chapterNumber: 0,
    title: '苦路',
    subtitle: '耶穌受難之路',
    body: '',
    layout: 'center'
  },
  section1: {
    chapterNumber: 1,
    title: '審判',
    subtitle: '從法庭到十字架之路的起點',
    body: '比拉多把耶穌交給他們任意處置。耶穌背著自己的十字架走出去，踏上那條通向救贖的路。在沉重的重壓下，他跌倒又站起，而一個名叫西滿的陌生人被迫肩負起這份重量。',
    layout: 'right'
  },
  section2: {
    chapterNumber: 2,
    title: '途中',
    subtitle: '在苦路上相遇的人',
    body: '一位婦女穿過人群，用布巾輕輕擦拭他的臉。耶穌再次跌倒，又再次站起。他抬起頭，對那些為他哭泣的婦女說：不要為我哭泣，要為你們自己和你們的子女哭泣。',
    layout: 'left'
  },
  section3: {
    chapterNumber: 3,
    title: '途中',
    subtitle: '在苦路上相遇的人',
    body: '一位婦女穿過人群，用布巾輕輕擦拭他的臉。耶穌再次跌倒，又再次站起。他抬起頭，對那些為他哭泣的婦女說：不要為我哭泣，要為你們自己和你們的子女哭泣。',
    layout: 'left'
  },
  section4: {
    chapterNumber: 4,
    title: '加爾瓦略山',
    subtitle: '死亡，以及死亡之後',
    body: '他們到了那個地方，把他釘在十字架上。黑暗籠罩大地。他大聲呼喊：父啊，我把我的靈魂交託在你手中。說完，他就斷氣了。沉默持續了整個夜晚，然而，死亡從來都不是故事的終點。',
    layout: 'right'
  }
}

function generatePagesConfig() {
  try {
    const pages = fs.readdirSync(vectorsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .sort((a, b) => {
        if (a === 'cover') return -1
        if (b === 'cover') return 1
        const aNum = parseInt(a.match(/\d+/)?.[0] || 0)
        const bNum = parseInt(b.match(/\d+/)?.[0] || 0)
        return aNum - bNum
      })

    const config = pages.map(pageId => {
      const pageDir = path.join(vectorsDir, pageId)
      const files = fs.readdirSync(pageDir)

      const backgroundFile = files.find(file => file.startsWith('background.'))
      const background = backgroundFile ? `/vectors/${pageId}/${backgroundFile}` : null

      // 後綴決定顯示大小：_sm ×0.7  (無後綴) ×1.0  _lg ×1.4  _xl ×1.8
      const SCALE_MAP = { sm: 0.7, lg: 1.4, xl: 1.8 }

      const comicFiles = files
        .filter(file => file.startsWith('comic'))
        .sort((a, b) => {
          const aNum = parseInt(a.match(/\d+/)?.[0] || 0)
          const bNum = parseInt(b.match(/\d+/)?.[0] || 0)
          return aNum - bNum
        })
        .map(file => {
          const suffix = file.match(/_([a-z]+)\.[^.]+$/)?.[1]
          return {
            src: `/vectors/${pageId}/${file}`,
            scale: SCALE_MAP[suffix] ?? 1.0
          }
        })

      const content = defaultContent[pageId] || {
        chapterNumber: 99,
        title: pageId,
        subtitle: '',
        body: '',
        layout: 'left'
      }

      return {
        id: pageId,
        chapterNumber: content.chapterNumber,
        title: content.title,
        subtitle: content.subtitle,
        body: content.body,
        layout: content.layout,
        background,
        comics: comicFiles
      }
    })

    const configContent = `// 苦路 — Way of the Cross
// Auto-generated page configuration
// Run: node scripts/generatePages.js

export const pagesConfig = ${JSON.stringify(config, null, 2)}

export const getPageById = (id) => pagesConfig.find(page => page.id === id)
export const getAllPageIds = () => pagesConfig.map(page => page.id)
`

    fs.writeFileSync(configPath, configContent, 'utf8')
    console.log(`✅ 已生成 pagesConfig.js，共 ${config.length} 個頁面：`)
    config.forEach(page => {
      const label = page.chapterNumber === 0 ? '封面' : `第${page.chapterNumber}段`
      console.log(`  - ${page.id} (${label})：${page.comics.length} 張圖`)
    })

  } catch (error) {
    console.error('❌ 生成失敗：', error.message)
    process.exit(1)
  }
}

generatePagesConfig()
