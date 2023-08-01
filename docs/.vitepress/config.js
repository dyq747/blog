import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdatedText: '最后更新时间',
    outlineTitle: '当前页面导航',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript', link: '/230731' },
    ],

    sidebar: [
      { text: 'JavaScript',
        items: [
          { text: "['1', '2', '3'].map(parseInt)what & why ?", link: '/230731' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyq747/blog' }
    ]
  }
})
