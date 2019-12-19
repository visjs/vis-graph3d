'use strict'

const mimicFn = require('mimic-fn')
const sliced = require('sliced')

function cb2promise (fn) {
  const len = arguments.length
  const args = sliced(arguments, 1, len)

  const promise = new Promise(function (resolve, reject) {
    args[len - 1] = createCallback(resolve, reject)
    fn.apply(null, args)
  })

  mimicFn(promise, fn)
  return promise
}

function createCallback (resolve, reject) {
  return function (err) {
    if (err) return reject(err)
    const args = sliced(arguments, 1, arguments.length)
    return resolve.apply(null, args.length === 1 ? args : [args])
  }
}

module.exports = cb2promise
