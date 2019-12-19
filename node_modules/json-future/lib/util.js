'use strict'

const os = require('os')
const parse = require('parse-json')
const asyncify = require('async/asyncify')
const loadJsonFile = require('load-json-file')
const writeJsonFile = require('write-json-file')
const stringifySafe = require('json-stringify-safe')

function stringify (data, replacer, space) {
  return stringifySafe(data, replacer, space) + os.EOL
}

module.exports = {
  stringify: stringify,
  stringifyAsync: asyncify(stringify),
  parse: parse,
  parseAsync: asyncify(parse),
  load: loadJsonFile.sync,
  loadAsync: loadJsonFile,
  save: writeJsonFile.sync,
  saveAsync: writeJsonFile
}
