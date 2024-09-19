var is10_000 = require('./index')
var asserts = require('node:assert')

asserts(is10_000(10_000))

asserts(!is10_000(1000))

console.log('tests passed')
