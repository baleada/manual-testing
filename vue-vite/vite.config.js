const { createFilter } = require('@rollup/pluginutils'),
      sourceTransform = require('@baleada/rollup-plugin-source-transform')

const getFilesToRoutesTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getFilesToRoutesTransform('vue', { exclude: 'routes.js' })
      
const getFilesToIndexTransform = require('@baleada/source-transform-files-to-index'),      
      filesToIndex = getFilesToIndexTransform()

const serveMarkdownAsVue = require('./util/serveMarkdownAsVue')

module.exports = {
  alias: {
    'fast-fuzzy': '/node_modules/fast-fuzzy/lib/fuzzy.mjs', // Workaround until @rollup/plugin-node-resolve supports conditional exports
  },
  configureServer: [
    // TODO: Files to routes and files to index
    serveMarkdownAsVue,
  ],
  rollupInputOptions: {
    cache: false,
    plugins: [
      sourceTransform({
        include: '*.md',
        transform: ({ source }) => {
          console.log(source)
          return markdownToVueSfc({ source })
        },
      })
    ]
  },
  transforms: [
    {
      test: ({ path })=> createFilter('**/src/tests/routes.js')(path),
      transform: ({ id }) => filesToRoutes({ id: id.replace(/^.*?\/src\//, 'src/') }),
    },
    {
      test: ({ path })=> createFilter('**/src/assets/**/index.js')(path),
      transform: ({ id }) => filesToIndex({ id: id.replace(/^.*?\/src\//, 'src/') }),
    },
  ],
  rollupPluginVueOptions: {
    include: ['**/*.vue', '**/*.md'],
  },
}