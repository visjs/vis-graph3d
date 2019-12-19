'use strict'

const util = require('./util')
const Args = require('args-js')
const sliced = require('sliced')
const nodeify = require('nodeify')
const promise = require('cb2promise')

const DEFAULTS_OPTS = {
  SAVE: {
    indent: '  '
  },
  STRINGIFY: {
    SPACE: 2
  }
}

function getStringifyParams (params) {
  return Args([
    { data: Args.OBJECT | Args.Required },
    { replacer: Args.FUNCTION | Args.Optional },
    { space: Args.NUMBER | Args.Optional, _default: DEFAULTS_OPTS.STRINGIFY.SPACE }
  ], params)
}

function stringifyAsync () {
  const args = sliced(arguments)
  const cb = typeof args[args.length - 1] === 'function' ? args.pop() : null

  const params = getStringifyParams(args)
  const data = params.data
  const replacer = params.replacer
  const space = params.space

  if (!cb) return promise(util.stringifyAsync, data, replacer, space)
  return util.stringifyAsync(data, replacer, space, cb)
}

function stringify () {
  const params = getStringifyParams(arguments)
  const data = params.data
  const replacer = params.replacer
  const space = params.space

  return util.stringify(data, replacer, space)
}

function parseAsync () {
  const args = sliced(arguments)
  const cb = typeof args[args.length - 1] === 'function' ? args.pop() : null

  const params = Args([
    { data: Args.STRING | Args.Required, _check: (data) => data.toString() },
    { reviver: Args.FUNCTION | Args.Optional },
    { filename: Args.STRING | Args.Optional }
  ], args)

  const data = params.data
  const reviver = params.reviver
  const filename = params.filename

  if (!cb) return promise(util.parseAsync, data, reviver, filename)
  return util.parseAsync(data, reviver, filename, cb)
}

function loadAsync () {
  const params = Args([
    { filepath: Args.STRING | Args.Required },
    { cb: Args.FUNCTION | Args.Optional }
  ], arguments)

  const filepath = params.filepath
  const cb = params.cb

  if (cb) return nodeify(util.loadAsync(filepath), cb)
  return util.loadAsync(filepath)
}

function load () {
  const params = Args([
    { filepath: Args.STRING | Args.Required }
  ], arguments)

  const filepath = params.filepath

  return util.load(filepath)
}

function saveAsync () {
  const params = Args([
    { filepath: Args.STRING | Args.Required },
    { data: Args.OBJECT | Args.Required },
    { opts: Args.OBJECT | Args.Optional, _default: DEFAULTS_OPTS.SAVE },
    { cb: Args.FUNCTION | Args.Optional }
  ], arguments)

  const filepath = params.filepath
  const data = params.data
  const opts = params.opts
  const cb = params.cb

  if (cb) return nodeify(util.saveAsync(filepath, data, opts), cb)
  return util.saveAsync(filepath, data, opts)
}

function save () {
  const params = Args([
    { filepath: Args.STRING | Args.Required },
    { data: Args.OBJECT | Args.Required },
    { opts: Args.OBJECT | Args.Optional, _default: DEFAULTS_OPTS.SAVE }
  ], arguments)

  const filepath = params.filepath
  const data = params.data
  const opts = params.opts

  return util.save(filepath, data, opts)
}

module.exports = {
  stringifyAsync: stringifyAsync,
  stringify: stringify,
  parseAsync: parseAsync,
  parse: util.parse,
  loadAsync: loadAsync,
  load: load,
  saveAsync: saveAsync,
  save: save
}
