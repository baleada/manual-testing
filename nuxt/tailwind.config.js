const defaultTheme = require('tailwindcss/defaultTheme'),
      tailwindLinear = require('@baleada/tailwind-linear')

// console.log(tailwindLinear())

module.exports = {
  theme: {
    ...defaultTheme,
    ...tailwindLinear({ increment: 1 }),
  }
}
