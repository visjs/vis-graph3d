# w3counter [![Build Status](http://img.shields.io/travis/kevva/w3counter.svg?style=flat)](https://travis-ci.org/kevva/w3counter)

> An API for w3counter to get the most popular operating systems, screen resolutions and web browsers


## Install

```
$ npm install --save w3counter
```


## Usage

```js
const w3counter = require('w3counter');

w3counter('browser').then(data => {
	console.log(data);
	//=> [{item: 'Chrome 34', percent: '20.71%'}, {item: 'Firefox 28', percent: '13.04%'}, ...]
});

w3counter('res').then(data => {
	console.log(data);
	//=> [{item: '1366x768', percent: '20.34%'}, {item: '1280x800', percent: '9.23%'}, ...]
});
```


## API

### w3counter(type)

Returns a promise for an array with the ten most popular items from the type you provided from
[w3counter.com](http://www.w3counter.com/globalstats.php).

#### type

Type: `string`

What type of items to get. Available types are:

* `browser` — Ten most popular web browsers
* `os` — Ten most popular operating systems
* `res` — Ten most popular screen resolutions


## CLI

```
$ npm install --global w3counter
```

```
$ w3counter --help

  Usage
    $ w3counter <type>

  Examples
    $ w3counter browser
    $ w3counter os
    $ w3counter res
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
