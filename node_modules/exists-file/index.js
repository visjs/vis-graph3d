'use strict'

const fs = require('fs')
const promise = require('cb2promise')
const isString = (str) => typeof str === 'string'

function existeFile (filepath, cb) {
  if (!isString(filepath)) {
    throw new TypeError('path must be a string or Buffer')
  }

  if (!cb) return promise(existeFile, filepath)

  fs.access(filepath, function (err) {
    if (!err) return cb(null, true)
    if (err.code === 'ENOENT') return cb(null, false)
    return cb(err)
  })
}

existeFile.sync = fs.existsSync

module.exports = existeFile
