import getTransform from '@baleada/markdown-to-prose'
import propsInterfaces from '@baleada/prose/vue/propsInterfaces'
import MarkdownItSpaLinks from '@baleada/markdown-it-spa-links'
import refractor from 'refractor'
import rehype from 'rehype'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-composition-api',
    '~/plugins/prose.js',
    '~/plugins/runtime.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend: config => {
      function escapeRawVueExpression (str) {
        return str.replace(/({{|}})/g, '<span>$1</span>')
      }

      const transform = getTransform({ templateType: 'vue', propsInterfaces }, {
        markdownIt: {
          html: true,
          linkify: true,
          highlight: (code, lang) => {
            try {
              const children = refractor.highlight(code, lang),
                    html = rehype()
                      .stringify({ type: 'root', children })
                      .toString()
              return escapeRawVueExpression(html)
            } catch (error) {
              console.warn(error)
              return ''
            }
          },
          plugins: [
            [MarkdownItSpaLinks, { spa: 'nuxt' }]
          ],
        },
        before: ({ frontMatter: { title } }) => `<ProseHeading :level="1">${title}</ProseHeading>\n`,
      }),
            prose = {
              loader: '@baleada/loader/lib/webpack',
              options: {
                transform: (source, { resourcePath }) => transform(source, resourcePath)
              }
            }

      config.module.rules.push({
        test: /\.md$/,
        oneOf: [
          {
            use: [
              'vue-loader',
              prose,
            ]
          }
        ]
      })
    },
  },
}
