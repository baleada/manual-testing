import getToTemplate from '@baleada/markdown-to-template/lib/prose'
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
    // '~/plugins/runtime.js'
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
      const toTemplate = getToTemplate('vue', {
              html: true,
              linkify: true,
              highlight: (code, lang) => {
                const children = refractor.highlight(code, lang),
                      html = rehype()
                        .stringify({ type: 'root', children })
                        .toString()

                return html
              },
              plugins: [
                [MarkdownItSpaLinks, 'nuxt']
              ],
            }),
            prose = {
              loader: '@baleada/loader/lib/webpack',
              options: {
                transform: (source, loaderContext) => toTemplate(source, loaderContext.resourcePath)
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
