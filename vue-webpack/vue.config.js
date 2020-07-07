const fs = require('fs')
const fromDirToRoutes = function ({ source }) {
  const pages = fs.readdirSync('./src/tests'),
        withoutExtensions = pages.map(page => page.replace(/\.vue$/, '')),
        withRouterFormatting = withoutExtensions.map(name => {
          return `{ path: '/${name}', name: '${name}', component: import('../tests/${name}.vue') }`
        }).join(',')

  console.log(withoutExtensions)

  return `export default [${withRouterFormatting}]`
}

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
                transform: fromDirToRoutes,
              }
            }
          ]
        }
      ]
    })
  },
  devServer: { port: 3000 }
}