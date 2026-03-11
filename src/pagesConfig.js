// 苦路 — Way of the Cross
// Auto-generated page configuration
// Run: node scripts/generatePages.js

export const pagesConfig = [
  {
    "id": "section1",
    "chapterNumber": 1,
    "title": "審判",
    "subtitle": "從法庭到十字架之路的起點",
    "body": "比拉多把耶穌交給他們任意處置。耶穌背著自己的十字架走出去，踏上那條通向救贖的路。在沉重的重壓下，他跌倒又站起，而一個名叫西滿的陌生人被迫肩負起這份重量。",
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
        "src": "/vectors/section1/comic3.png",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic4.png",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic5.png",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic6.png",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic7.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section1/comic8.png",
        "scale": 1
      }
    ]
  },
  {
    "id": "section2",
    "chapterNumber": 2,
    "title": "途中",
    "subtitle": "在苦路上相遇的人",
    "body": "一位婦女穿過人群，用布巾輕輕擦拭他的臉。耶穌再次跌倒，又再次站起。他抬起頭，對那些為他哭泣的婦女說：不要為我哭泣，要為你們自己和你們的子女哭泣。",
    "layout": "left",
    "background": "/vectors/section2/background.png",
    "comics": [
      {
        "src": "/vectors/section2/comic1.png",
        "scale": 1
      },
      {
        "src": "/vectors/section2/comic2.png",
        "scale": 1
      },
      {
        "src": "/vectors/section2/comic3.png",
        "scale": 1
      },
      {
        "src": "/vectors/section2/comic4.png",
        "scale": 1
      }
    ]
  },
  {
    "id": "section3",
    "chapterNumber": 3,
    "title": "途中",
    "subtitle": "在苦路上相遇的人",
    "body": "一位婦女穿過人群，用布巾輕輕擦拭他的臉。耶穌再次跌倒，又再次站起。他抬起頭，對那些為他哭泣的婦女說：不要為我哭泣，要為你們自己和你們的子女哭泣。",
    "layout": "left",
    "background": "/vectors/section3/background.jpg",
    "comics": [
      {
        "src": "/vectors/section3/comic1.jpg",
        "scale": 1
      },
      {
        "src": "/vectors/section3/comic2.png",
        "scale": 1
      },
      {
        "src": "/vectors/section3/comic3.png",
        "scale": 1
      },
      {
        "src": "/vectors/section3/comic4.png",
        "scale": 1
      },
      {
        "src": "/vectors/section3/comic5.png",
        "scale": 1
      },
      {
        "src": "/vectors/section3/comic6.png",
        "scale": 1
      },
      {
        "src": "/vectors/section3/comic7.png",
        "scale": 1
      }
    ]
  },
  {
    "id": "section4",
    "chapterNumber": 4,
    "title": "加爾瓦略山",
    "subtitle": "死亡，以及死亡之後",
    "body": "他們到了那個地方，把他釘在十字架上。黑暗籠罩大地。他大聲呼喊：父啊，我把我的靈魂交託在你手中。說完，他就斷氣了。沉默持續了整個夜晚，然而，死亡從來都不是故事的終點。",
    "layout": "right",
    "background": "/vectors/section4/background.png",
    "comics": [
      {
        "src": "/vectors/section4/comic1.png",
        "scale": 1
      },
      {
        "src": "/vectors/section4/comic2.png",
        "scale": 1
      },
      {
        "src": "/vectors/section4/comic3_xl.png",
        "scale": 1.8
      }
    ]
  }
]

export const getPageById = (id) => pagesConfig.find(page => page.id === id)
export const getAllPageIds = () => pagesConfig.map(page => page.id)
