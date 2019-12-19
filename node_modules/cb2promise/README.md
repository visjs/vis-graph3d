# cb2promise

![Last version](https://img.shields.io/github/tag/Kikobeats/cb2promise.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/cb2promise/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/cb2promise)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/cb2promise.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/cb2promise)
[![Dependency status](https://img.shields.io/david/Kikobeats/cb2promise.svg?style=flat-square)](https://david-dm.org/Kikobeats/cb2promise)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/cb2promise.svg?style=flat-square)](https://david-dm.org/Kikobeats/cb2promise#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/cb2promise.svg?style=flat-square)](https://www.npmjs.org/package/cb2promise)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> It converts from standard NodeJS callback into a ES2015 Promise.

I use this library across my project for make easy provide API's that works with callback and promise style.

## Install

```bash
npm install cb2promise --save
```

## Bencharmk

```bash
$ node benchmark.js

# cb2promise
# 1,2,3,4,5,6,7,8,8,9,10
ok ~2.65 ms (0 s + 2649092 ns)

# pify
# 1
ok ~912 μs (0 s + 911730 ns)

# es6-promisify
# 1
ok ~967 μs (0 s + 966663 ns)

# bluebird
# 1
ok ~3.41 ms (0 s + 3412077 ns)

all benchmarks completed
ok ~7.94 ms (0 s + 7939562 ns)
```

## Usage

```js
const cb2promise = require('cb2promise')

const callbackFn = function (message, done) {
  return done(null, message)
}

const promise = cb2promise(callbackFn, 'hello world')

promise().then(console.log)
// => hello world
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
