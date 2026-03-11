// 苦路 — Way of the Cross
// Auto-generated page configuration
// Run: node scripts/generatePages.js

export const pagesConfig = [
  {
    "id": "section1",
    "chapterNumber": 1,
    "title": "客西馬尼園",
    "subtitle": "黑夜中的逮捕",
    "body": "耶穌在客西馬尼園禱告後，火把的光出現在黑夜中。猶大帶著士兵來到園中，用親吻作為背叛的記號。士兵上前捉拿耶穌，門徒驚慌逃散。耶穌沒有抵抗，甘願被捆綁帶走。",
    "layout": "right",
    "background": "/vectors/section1/background.jpg",
    "comics": [
      {
        "src": "/vectors/section1/comic1.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic2.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic3.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic4.jpg",
        "scale": 1
      }
    ]
  },
  {
    "id": "section2",
    "chapterNumber": 2,
    "title": "被審判的義人",
    "subtitle": "不義的審判",
    "body": "耶穌被帶到宗教領袖與羅馬官員面前受審。控告不斷出現，卻找不出真正的罪。彼拉多原想釋放祂，但群眾高喊：「釘祂十字架！」",
    "layout": "left",
    "background": "/vectors/section2/background.jpg",
    "comics": [
      {
        "src": "/vectors/section2/comic1.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section2/comic2.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section2/comic3.jpg",
        "scale": 1
      }
    ]
  },
  {
    "id": "section3",
    "chapterNumber": 3,
    "title": "殘酷的刑罰",
    "subtitle": "鞭打、折磨",
    "body": "鞭子一次又一次落在耶穌身上。皮肉被撕裂，鮮血流下。祂的身體已經極度虛弱，卻仍然承受這一切。",
    "layout": "right",
    "background": "/vectors/section3/background.jpg",
    "comics": [
      {
        "src": "/vectors/section3/comic1.jpg",
        "scale": 1
      }
    ]
  },
  {
    "id": "section4",
    "chapterNumber": 4,
    "title": "嘲笑與羞辱",
    "subtitle": "戲弄君王",
    "body": "士兵為祂披上紫袍，編荊棘冠冕戴在祂頭上。他們跪下譏笑說：「猶太人的王萬歲！」真正的君王，卻被當作笑柄。",
    "layout": "left",
    "background": "/vectors/section4/background.jpg",
    "comics": [
      {
        "src": "/vectors/section4/comic1.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section4/comic2.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section4/comic3.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section4/comic4.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section4/comic5.jpg",
        "scale": 1
      }
    ]
  },
  {
    "id": "section5",
    "chapterNumber": 5,
    "title": "十字架的道路",
    "subtitle": "背起十字架",
    "body": "士兵把沉重的十字架放在祂肩上。耶穌一步一步走向各各他。祂跌倒、再站起來。這條路通往死亡，也通往救贖。",
    "layout": "right",
    "background": "/vectors/section5/background.jpg",
    "comics": [
      {
        "src": "/vectors/section5/comic1.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section5/comic2.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section5/comic3.jpg",
        "scale": 1
      }
    ]
  }
]

export const getPageById = (id) => pagesConfig.find(page => page.id === id)
export const getAllPageIds = () => pagesConfig.map(page => page.id)
