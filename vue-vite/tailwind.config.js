const baleada = require('@baleada/tailwind-theme')

module.exports = {
  purge: {
    content: [
      'src/components/**/*',
      'src/tests/**/*',
    ]
  },
  theme: baleada,
}