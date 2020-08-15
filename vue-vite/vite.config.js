const virtual = require('@rollup/plugin-virtual')

const { createFilter } = require('@rollup/pluginutils'),
      sourceTransform = require('@baleada/rollup-plugin-source-transform')

const getFilesToRoutesTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getFilesToRoutesTransform('vue', { exclude: ['**/.**', '**/*routes.js'] })
      
const getFilesToIndexTransform = require('@baleada/source-transform-files-to-index'),      
      filesToIndex = getFilesToIndexTransform(),
      relativeFromRootFilesToIndex = getFilesToIndexTransform({ importType: 'relativeFromRoot' })

const getServeAsVue = require('@baleada/vite-serve-as-vue'),
      sourceTransformMarkdownToVueSfc = require('./util/sourceTransformMarkdownToVueSfc')


const { resolve } = require('path'),
      basePath = resolve('')

module.exports = {
  alias: {
    'fast-fuzzy': '/node_modules/fast-fuzzy/lib/fuzzy.mjs', // Workaround until @rollup/plugin-node-resolve supports conditional exports
  },
  configureServer: [
    getServeAsVue({
      toVue: sourceTransformMarkdownToVueSfc,
      include: '**/*.md'
    }),
    getServeVirtual({
      path: '/src/assets/js',
      source: relativeFromRootFilesToIndex({ id: `${basePath}/src/assets/js` }),
      type: 'js'
    }),
    getServeVirtual({
      path: '/src/components',
      source: relativeFromRootFilesToIndex({ id: `${basePath}/src/components` }),
      type: 'js'
    }),
    getServeVirtual({
      path: '/src/tests/routes',
      source: filesToRoutes({ id: `${basePath}/src/tests/routes.js` }),
      type: 'js',
    })
  ],
  rollupInputOptions: {
    plugins: [
      sourceTransform({
        include: '**/*.md',
        transform: ({ source }) => sourceTransformMarkdownToVueSfc({ source }),
      }),
      virtual({
        '../assets/js': filesToIndex({ id: `${basePath}/src/assets/js/index.js` })
      })
    ]
  },
  rollupPluginVueOptions: {
    include: ['**/*.vue', '**/*.md'],
  },
}

