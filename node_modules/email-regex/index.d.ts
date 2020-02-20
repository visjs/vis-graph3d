declare namespace emailRegex {
	export interface Options {
		/**
		Only match an exact string.

		Useful with `RegExp#test` to check if a string is an email address.

		@default false
		*/
		exact?: boolean
	}
}

/**
Regular expression for matching email addresses.

Use it for finding email addresses or checking if something is email like. [You shouldn't use this for validating emails.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Only for hinting to the user.

@example
```
import emailRegex = require('email-regex');

// Contains an email address
emailRegex().test('unicorn sindresorhus@gmail.com');
//=> true

// Is an email address
emailRegex({exact: true}).test('sindresorhus@gmail.com');
//=> true

'unicorn sindresorhus@gmail.com cake john@doe.com rainbow'.match(emailRegex());
//=> ['sindresorhus@gmail.com', 'john@doe.com']
```
*/
declare function emailRegex(options?: emailRegex.Options): RegExp;

export = emailRegex
