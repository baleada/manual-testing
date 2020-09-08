const MarkdownIt = require('markdown-it'),
      MarkdownItProseContainer = require('@baleada/markdown-it-prose-container'),
      MarkdownItSpaLinks = require('@baleada/markdown-it-spa-links'),
      markdownItOptions = {
        html: false,
        linkify: true,
      },
      md = new MarkdownIt(markdownItOptions)

md.use(MarkdownItProseContainer, { template: 'vue' })
md.use(MarkdownItSpaLinks, { spa: 'vue' })

const transform = ({ source: markdown }) => `<template>${md.render(markdown)}</template>`

module.exports = transform

// function escapeRawVueExpression (str) {
//   return str.replace(/({{|}})/g, '<span>$1</span>')
// }
