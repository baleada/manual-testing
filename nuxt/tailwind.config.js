const defaultTheme = require('tailwindcss/defaultTheme'),
      linearNumeric = require('@baleada/linear-numeric/tailwind')

// console.log(linearNumeric())

module.exports = {
  theme: {
    ...defaultTheme,
    ...linearNumeric({ increment: 1 }),
  }
}
