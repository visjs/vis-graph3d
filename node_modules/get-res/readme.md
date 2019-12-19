# get-res [![Build Status](http://img.shields.io/travis/kevva/get-res.svg?style=flat)](https://travis-ci.org/kevva/get-res)

> Get ten most popular screen resolutions


## Install

```
$ npm install --save get-res
```


## Usage

```js
const getRes = require('get-res');

getRes().then(data => {
	console.log(data);
	// => [{item: '1366x768', percent: '20.34%'}, {item: '1280x800', percent: '9.23%'}, ...]
});
```


## API

### getRes()

Gets ten most popular screen resolutions from [w3counter](http://www.w3counter.com/globalstats.php). Returns a promise that resolves to an array containing the results.


## CLI

```
$ npm install --global get-res
```

```
$ get-res --help

  Usage
    $ get-res
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
