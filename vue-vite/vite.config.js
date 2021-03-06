const sourceTransform = require('@baleada/rollup-plugin-source-transform'),
      virtual = require('@baleada/rollup-plugin-virtual')

const getFilesToRoutesTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getFilesToRoutesTransform('vue', { exclude: ['**/.**', '**/*routes.js'] }),
      relativeFromRootFilesToRoutes = getFilesToRoutesTransform('vue', { exclude: ['**/.**', '**/*routes.js'], importType: 'relativeFromRoot' })
      
const getFilesToIndexTransform = require('@baleada/source-transform-files-to-index'),      
      filesToIndex = getFilesToIndexTransform(),
      relativeFromRootFilesToIndex = getFilesToIndexTransform({ importType: 'relativeFromRoot' })

const getServeAsVue = require('@baleada/vite-serve-as-vue'),
      sourceTransformMarkdownToVueSfc = require('./util/sourceTransformMarkdownToVueSfc'),
      sourceTransformProseToVueSfc = require('./util/sourceTransformProseToVueSfc')

const getServeVirtual = require('@baleada/vite-serve-virtual')

const aliasBabelRuntime = require('@baleada/vite-alias-babel-runtime')

module.exports = {
  alias: {
    'fast-fuzzy': '/node_modules/fast-fuzzy/lib/fuzzy.mjs', // Workaround until @rollup/plugin-node-resolve supports conditional exports
    ...aliasBabelRuntime(),
  },
  configureServer: [
    getServeAsVue({
      toVue: sourceTransformMarkdownToVueSfc,
      include: '**/*.md'
    }),
    getServeAsVue({
      toVue: sourceTransformProseToVueSfc,
      include: '**/*.prose',
    }),
    getServeVirtual({
      test: ({ id }) => id.endsWith('/src/assets/js'),
      transform: ({ id }) => ({
        type: 'js',
        source: relativeFromRootFilesToIndex({ id }),
      })
    }),
    getServeVirtual({
      test: ({ id }) => id.endsWith('/src/components'),
      transform: ({ id }) => ({
        type: 'js',
        source: relativeFromRootFilesToIndex({ id }),
      })
    }),
    getServeVirtual({
      test: ({ id }) => id.endsWith('/src/tests/routes'),
      transform: ({ id }) => {
        return {
          type: 'js',
          source: relativeFromRootFilesToRoutes({ id }),
        }
      }
    }),
  ],
  rollupInputOptions: {
    plugins: [
      sourceTransform({
        include: '**/*.md',
        transform: ({ source }) => sourceTransformMarkdownToVueSfc({ source }),
      }),
      sourceTransform({
        include: '**/*.prose',
        transform: ({ source }) => sourceTransformProseToVueSfc({ source }),
      }),
      virtual({
        include: '**/assets/js',
        transform: ({ id }) => filesToIndex({ id }),
      }),
      virtual({
        include: '**/components',
        transform: ({ id }) => filesToIndex({ id }),
      }),
      virtual({
        include: '**/tests/routes',
        transform: ({ id }) => filesToRoutes({ id }),
      }),
    ]
  },
  rollupPluginVueOptions: {
    include: ['**/*.vue', '**/*.md', '**/*.prose'],
  },
}

