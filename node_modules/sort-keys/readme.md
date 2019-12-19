# sort-keys [![Build Status](https://travis-ci.org/sindresorhus/sort-keys.svg?branch=master)](https://travis-ci.org/sindresorhus/sort-keys)

> Sort the keys of an object

Useful to get a deterministically ordered object, as the order of keys can vary between engines.


## Install

```
$ npm install sort-keys
```


## Usage

```js
const sortKeys = require('sort-keys');

sortKeys({c: 0, a: 0, b: 0});
//=> {a: 0, b: 0, c: 0}

sortKeys({b: {b: 0, a: 0}, a: 0}, {deep: true});
//=> {a: 0, b: {a: 0, b: 0}}

sortKeys({c: 0, a: 0, b: 0}, {
	compare: (a, b) => -a.localeCompare(b)
});
//=> {c: 0, b: 0, a: 0}
```


## API

### sortKeys(object, [options])

Returns a new object with sorted keys.

#### object

Type: `object`

#### options

Type: `object`

##### deep

Type: `boolean`<br>
Default: `false`

Recursively sort keys.

##### compare

Type: `Function`

[Compare function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
