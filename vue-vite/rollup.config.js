import sourceTransform from '@baleada/rollup-plugin-source-transform'
import getFilesToRoutesTransform from '@baleada/source-transform-files-to-routes'
import getFilesToIndexTransform from '@baleada/source-transform-files-to-index'

const filesToRoutes = getFilesToRoutesTransform('vue', { exclude: 'routes.js' }),
      filesToIndex = getFilesToIndexTransform()

export default {
  plugins: [
    sourceTransform({
      include: ['**/src/tests/routes.js'],
      transform: ({ id }) => {
        console.log(id)
        return filesToRoutes({ id: id.replace(/^.*?\/src\//, 'src/') })
      },
    })
  ]
}