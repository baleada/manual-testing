const { readdirSync } = require('fs'),
      { parse } = require('path')

function aliasBabelRuntimeHelpers () {
  const helpers = readdirSync('node_modules/@babel/runtime/helpers/esm')

  return helpers.reduce((aliased, helper) => {
    const { name } = parse(helper)

    return {
      ...aliased,
      [`@babel/runtime/helpers/${name}`]: `@babel/runtime/helpers/esm/${helper}`,
    }
  }, {})
}

module.exports = aliasBabelRuntimeHelpers
