import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes : "180x180", href: '/blog/favicon_io/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes : "32x32",  href: '/blog/favicon_io/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes : "16x16",  href: '/blog/favicon_io/favicon-16x16.png' }],
    ['link', { rel: 'site.webmanifest', href: '/blog/favicon_io/site.webmanifest' }],
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
