# viewport-list [![Build Status](http://img.shields.io/travis/kevva/viewport-list.svg?style=flat)](https://travis-ci.org/kevva/viewport-list)

> Return a list of devices and their viewports


## Install

```
$ npm install --save viewport-list
```


## Usage

Pass in a optional keyword which is a device name from [this list](http://viewportsizes.com).

```js
const viewportList = require('viewport-list');

console.log(viewportList(['iphone 4s']));
//=> [{name: 'iphone 4s', platform: 'iOS', os: '4.3.5', size: '320x480', release: '2011-10'}]
```


## API

### viewportList([items])

Returns an array of viewports.

#### items

Type: `Array`<br>
Default: `[]`

An array of device names to fetch.


## Related

* [viewport-list-cli](https://github.com/kevva/viewport-list-cli) - CLI for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
