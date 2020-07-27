// Adapted from Vitepress https://github.com/vuejs/vitepress/blob/master/src/node/server.ts
const { existsSync } = require('fs'),
      { cachedRead } = require('vite'),
      sourceTransformMarkdownToVueSfc = require('./sourceTransformMarkdownToVueSfc')

module.exports = ({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher, // chokidar file watcher instance
  resolver,
}) => {
  app.use(async (ctx, next) => {
    // You can do pre-processing here - this will be the raw incoming requests
    // before vite touches it.

    // handle .md -> vue transforms
    if (ctx.path.endsWith('.md')) {

      const file = resolver.requestToFile(ctx.path)
      if (!existsSync(file)) {
        return next()
      }

      const markdown = await cachedRead(ctx, file)

      // let vite know this is supposed to be treated as vue file
      ctx.vue = true

      console.log(ctx.body)
      const sfc = sourceTransformMarkdownToVueSfc(markdown.toString())
      
      ctx.body = sfc
      // debug(ctx.url, ctx.status)

      await next()

      // // make sure this is the main <script> block
      // if (!ctx.query.type) {
      //   // inject pageData to generated script
      //   ctx.body += `\nexport const __pageData = ${JSON.stringify(
      //     JSON.stringify(pageData)
      //   )}`
      // }
      return
    } else {
      await next()
    }

    // await next()

    // ...wait for vite to do built-in transforms
    // await next()

    // Post processing before the content is served. Note this includes parts
    // compiled from `*.vue` files, where <template> and <script> are served as
    // `application/javascript` and <style> are served as `text/css`.
    // if (ctx.response.is('js')) {
    //   console.log('post processing: ', ctx.url)
    //   console.log(ctx.body) // can be string or Readable stream
    // }
  })
}