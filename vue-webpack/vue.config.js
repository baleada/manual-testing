const getFilesToRoutesTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getFilesToRoutesTransform('vue', { exclude: 'routes.js' })
      
const getFilesToIndexTransform = require('@baleada/source-transform-files-to-index'),      
      filesToIndex = getFilesToIndexTransform()

module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      test: /tests\/routes\.js$/,
      oneOf: [
        {
          use: [
            {
              loader: '@baleada/webpack-source-transform',
              options: {
                transform: ({ id, context: { cacheable } }) => {
                  cacheable(false)
                  return filesToRoutes({ id })
                },
              }
            }
          ]
        }
      ]
    })

    config.module.rules.push({
      test: /assets(\/.+|.+)\/index\.js$/,
      oneOf: [
        {
          use: [
            {
              loader: '@baleada/webpack-source-transform',
              options: {
                transform: filesToIndex,
              }
            }
          ]
        }
      ]
    })
  },
  devServer: { port: 3000 }
}