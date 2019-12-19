# JSON Future

<h1 align="center">
  <img src="https://i.imgur.com/WSDllwa.png" alt="json-future">
  <br>
  <br>
</h1>

![Last version](https://img.shields.io/github/tag/Kikobeats/json-future.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/json-future/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/json-future)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/json-future.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/json-future)
[![Dependency status](http://img.shields.io/david/Kikobeats/json-future.svg?style=flat-square)](https://david-dm.org/Kikobeats/json-future)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/json-future.svg?style=flat-square)](https://david-dm.org/Kikobeats/json-future#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/json-future.svg?style=flat-square)](https://www.npmjs.org/package/json-future)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Modern JSON interface. [propositions for ECMAScript 7](https://github.com/mohsen1/async-json).

## Why

* High level methods for manipulate JSON files.
* Backward compatibility with JSON Object in Node/Browser.
* Async support (callback/promise) based on [ECMAScript proposal](https://github.com/mohsen1/async-json).

JSON Future is based into a set of cool libraries to handle JSON, but some of this libraries uses promises or callback style. This library adds an extra layer to call these libraries uniformly.

## Install

```bash
npm install json-future --save
```

## Usage

```js
const jsonFuture = require('json-future')
```

Don't be afraid to replace for the default `JSON` object. The library is specially designed for be compatible and don't break your code:

```js
JSON = require('json-future')
```

Also you can do this action using the `register` helper:

```js
require('json-future/register')
```

## API

In `async` methods, if you don't provide a callback for node style, then the method return a `Promise`.

### .stringify(input, [replacer], [space])
### .stringifyAsync(input, [replacer], [space], [cb])

Creates the `string` version of the input.

### .parse(input, [reviver], [filename])
### .parseAsync(input, [reviver], [filename], [cb])

Creates the `object` version of the input.

### .load(filepath)
### .loadAsync(filepath, [cb])

Returns the parsed JSON.

### .save(filepath, data, [options])
### .saveAsync(filepath, data, [options], [cb])

Stringify and write JSON to a file atomically.

#### options

##### indent

Type: `string`, `number`
Default: `\t`

Indentation as a string or number of spaces.
Pass in `null` for no formatting.

##### sortKeys

Type: `boolean`, `function`
Default: `false`

Sort the keys recursively.
Optionally pass in a [`compare`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function.

##### replacer

Type: `function`

Passed into [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter).

##### mode

Type: `number`
Default `438` *(0666 in octal)*

[Mode](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation) used when writing the file.

## License

MIT © [Kiko Beats](http://kikobeats.com)
