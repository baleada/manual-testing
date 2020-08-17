const baleada = require('@baleada/tailwind-theme')

module.exports = {
  purge: {
    content: [
      'src/App.vue',
      'src/components/**/*',
      'src/tests/**/*',
    ]
  },
  theme: baleada,
}
