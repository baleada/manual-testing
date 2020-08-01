const MarkdownIt = require('markdown-it'),
      markdownItOptions = {
        html: true,
        linkify: true,
      },
      md = new MarkdownIt(markdownItOptions)

const transform = ({ source: markdown }) => `<template>${md.render(markdown)}</template>`

module.exports = transform

// function escapeRawVueExpression (str) {
//   return str.replace(/({{|}})/g, '<span>$1</span>')
// }