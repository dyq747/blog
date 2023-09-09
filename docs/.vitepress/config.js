import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: 'dyq',
  titleTemplate: '工作 & 知识 & 技能 & 生活',
  description: '高级前端进阶',
  lastUpdated: true,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes : "180x180", href: '/blog/favicon_io/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes : "32x32",  href: '/blog/favicon_io/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes : "16x16",  href: '/blog/favicon_io/favicon-16x16.png' }],
    ['link', { rel: 'site.webmanifest', href: '/blog/favicon_io/site.webmanifest' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    outlineTitle: '当前页面目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'JavaScript', link: '/javascript/230731' },
      { text: 'Vue', link: '/vue/230807' },
      { text: '性能优化', link: '/optimize/230804' },
      { text: '浏览器', link: '/browser/230817' },
      { text: '工程化', link: '/optimize/230819' },
      { text: '算法', link: '/algorithm/230819' },
      { text: '设计模式', link: '/design-pattern/230909' },
      { text: '面试', link: '/interview/230805' },
      { text: '工作笔记', link: '/work/230804' },
      { text: '复盘', link: '/review/230819' },
      { text: '三省吾身', link: '/check-myself/' },
      { text: '思过', link: '/confess/' },
    ],
    sidebar: {
      '/javascript/': [
        { text: 'JavaScript',
          items: [
            { text: "['1', '2', '3'].map(parseInt)what & why ?", link: '/javascript/230731' }
          ]
        },
      ],
      '/vue/': [
        { text: 'Vue',
          items: [
            { text: "Vue 渲染大量数据时应该怎么优化", link: '/vue/230807' },
            { text: "Vue 渲染列表为什么要写 key，其作用是什么", link: '/vue/230811' },
            { text: "子组件为什么不能修改父组件传递的 Prop 属性", link: '/vue/230814' },
            { text: "computed 和 watch 的区别是什么", link: '/vue/230815' },
            { text: "父组件和子组件的生命周期钩子执行顺序是什么", link: '/vue/230816' },
            { text: "双向绑定和 vuex 是否冲突", link: '/vue/230818' },
            { text: "Vue 的响应式原理中，Object.defineProperty 有什么缺陷", link: '/vue/230819' },
            { text: "谈一谈 nextTick 的原理", link: '/vue/230824' },
            { text: "Vue 中的 Computed 是如何实现的", link: '/vue/230825' },
            { text: "v-if、v-show 和 v-html 的原理是什么", link: '/vue/230831' },
            { text: "vue 如何优化首页的加载速度？vue 首页白屏是什么问题引起的？如何解决？", link: '/vue/230831-2' },
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
      '/browser/': [
        { text: '浏览器',
          items: [
            { text: "浏览器缓存的读取规则", link: '/browser/230817' },
            { text: "介绍下如何实现 token 加密", link: '/browser/230819' },
            { text: "cookie 和 token 都存放在 header 中，为什么不会劫持 token", link: '/browser' },
            { text: "说说浏览器和 Node 事件循环的区别", link: '/browser' },
          ]
        }
      ],
      '/engineering/': [
        { text: '工程化',
          items: [
            { text: "介绍下重绘和回流（Repaint & Reflow），以及如何进行优化", link: '/optimize/230804' }
          ]
        }
      ],
      '/design-pattern/': [
        { text: '设计模式',
          items: [
            { text: "介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景", link: '/design-pattern/230909' },
          ]
        }
      ],
      '/interview/': [
        { text: '面试',
          items: [
            { text: "面试前需要注意的17个问题", link: '/interview/230805' }
          ]
        }
      ],
      '/review/': [
        { text: '复盘',
          items: [
            { text: "第二次相亲", link: '/review/230819' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyq747/blog' }
    ]
  }
})
