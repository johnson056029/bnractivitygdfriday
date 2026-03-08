// Auto-generated page configuration
// This file is automatically updated when new pages are added to public/vectors/
// Run: node scripts/generatePages.js

export const pagesConfig = [
  {
    "id": "page1",
    "title": "",
    "subtitle": "",
    "layout": "left",
    "background": "/vectors/page1/background.png",
    "comics": [
      "/vectors/page1/comic1_1.jpg"
    ]
  },
  {
    "id": "page2",
    "title": "Chapter 1: Departure",
    "subtitle": "The beginning of our adventure",
    "layout": "right",
    "background": "/vectors/page2/background.jpg",
    "comics": [
      "/vectors/page2/comic1_1.jpg",
      "/vectors/page2/comic1_2.jpg"
    ]
  }
]

// Helper function to get page by ID
export const getPageById = (id) => pagesConfig.find(page => page.id === id)

// Helper function to get all page IDs
export const getAllPageIds = () => pagesConfig.map(page => page.id)
