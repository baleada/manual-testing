const { generateIndex } = require('@baleada/prepare')

generateIndex('scripts/fixtures/hello')
generateIndex('scripts/fixtures/world')
generateIndex([
  'scripts/fixtures/hello',
  'scripts/fixtures/world',
], { outfile: 'scripts/fixtures/index', extensions: ['js', 'vue'] })