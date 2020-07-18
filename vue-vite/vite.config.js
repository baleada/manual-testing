const minimatch = require('minimatch')

const getFilesToRoutesTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getFilesToRoutesTransform('vue', { exclude: 'routes.js' })
      
const getFilesToIndexTransform = require('@baleada/source-transform-files-to-index'),      
      filesToIndex = getFilesToIndexTransform()

module.exports = {
  transforms: [
    {
      test: ({ path })=> minimatch(path, '**/src/tests/routes.js'),
      transform: ({ id }) => filesToRoutes({ id: id.replace(/^.*?\/src\//, 'src/') }),
    },
    {
      test: ({ path })=> minimatch(path, '**/src/assets/**/index.js'),
      transform: ({ id }) => filesToIndex({ id: id.replace(/^.*?\/src\//, 'src/') }),
    },
  ]
}