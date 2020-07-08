const getTransform = require('@baleada/source-transform-files-to-routes'),
      filesToRoutes = getTransform({
        router: 'vue',
        pathToFiles: {
          absolute: 'src/tests',
          relativeFromRoutes: '../tests',
        }
      })

module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      test: /router\/routes\.js$/,
      oneOf: [
        {
          use: [
            {
              loader: '@baleada/webpack-source-transform',
              options: {
                transform: () => {
                  const routes = filesToRoutes()
                  console.log(routes)
                  return routes
                },
              }
            }
          ]
        }
      ]
    })
  },
  devServer: { port: 3000 }
}