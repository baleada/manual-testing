import { prosePostRender } from '@baleada/prose-loader/lib/stubs'

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
    '~/plugins/runtime.js'
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
      const prose = {
              loader: '@baleada/prose-loader',
              options: {
                postRender: rendered => `<template lang="html">${prosePostRender(rendered)}</template>\n`
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
