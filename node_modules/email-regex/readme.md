# email-regex [![Build Status](https://travis-ci.org/sindresorhus/email-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/email-regex)

> Regular expression for matching email addresses

Use it for finding email addresses or checking if something is email like.

[You shouldn't use this for validating emails.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Only for hinting to the user.


## Install

```
$ npm install email-regex
```


## Usage

```js
const emailRegex = require('email-regex');

// Contains an email address
emailRegex().test('unicorn sindresorhus@gmail.com');
//=> true

// Is an email address
emailRegex({exact: true}).test('sindresorhus@gmail.com');
//=> true

'unicorn sindresorhus@gmail.com cake john@doe.com rainbow'.match(emailRegex());
//=> ['sindresorhus@gmail.com', 'john@doe.com']
```


## API

### emailRegex(options?)

Returns a regex for matching email addresses.

#### options

Type: `object`

##### exact

Type: `boolean`<br>
Default: `false` *(Matches any email address in a string)*

Only match an exact string.<br>
Useful with `RegExp#test` to check if a string is an email address.
