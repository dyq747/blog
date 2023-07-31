import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
