import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "前端进阶",
  description: "前端高手进阶",
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
      { text: 'JavaScript', link: '/javascript/230731' },
      { text: '性能优化', link: '/optimize/230804' },
      { text: '工作笔记', link: '/work/230804' },
      { text: '面试', link: '/interview/230805' },
    ],

    sidebar: {
      '/javascript/': [
        { text: 'JavaScript',
          items: [
            { text: "['1', '2', '3'].map(parseInt)what & why ?", link: '/javascript/230731' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/optimize/': [
        { text: '性能优化',
          items: [
            { text: "介绍下重绘和回流（Repaint & Reflow），以及如何进行优化", link: '/optimize/230804' }
          ]
        }
      ],
      '/interview/': [
        { text: '面试',
          items: [
            { text: "面试前需要注意的17个问题", link: '/interview/230805' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyq747/blog' }
    ]
  }
})
