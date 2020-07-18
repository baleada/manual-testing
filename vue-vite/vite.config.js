const { createFilter } = require('@rollup/pluginutils')

const getFilesToRoutesTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getFilesToRoutesTransform('vue', { exclude: 'routes.js' })
      
const getFilesToIndexTransform = require('@baleada/source-transform-files-to-index'),      
      filesToIndex = getFilesToIndexTransform()

module.exports = {
  rollupInputOptions: {
    cache: false,
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
  ]
}