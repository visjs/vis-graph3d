// Copyright (c) 2014-2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

exports.stdout = new TestStream(process.stdout);
exports.stderr = new TestStream(process.stderr);

function TestStream(stream) {
	this._stream = stream;
}

TestStream.prototype.inspect = function(options) {
	expectNoFunction(arguments, "inspect", "inspectSync");

	var isTTY;
	if (options && options.isTTY !== undefined) {
		isTTY = options.isTTY;
	}

	// This code inspired by http://userinexperience.com/?p=714
	var output = [];
	var stream = this._stream;

	var originalWrite = stream.write;
	stream.write = function(string) {
		output.push(string);
	};

	var originalIsTTY = stream.isTTY;
	if (isTTY !== undefined) {
		stream.isTTY = isTTY;
	}

	return {
		output: output,
		restore: function() {
			stream.write = originalWrite;
			stream.isTTY = originalIsTTY;
		}
	};
};

TestStream.prototype.inspectSync = function(options, fn) {
	expectFunction(arguments, "inspectSync", "inspect");

	if (arguments.length === 1) {
		fn = options;
		options = {};
	}

	var inspect = this.inspect(options);
	try {

		fn(inspect.output);
	}
	finally {
		inspect.restore();
	}
	return inspect.output;
};

TestStream.prototype.ignore = function(options) {
	expectNoFunction(arguments, "ignore", "ignoreSync");

	return this.inspect(options).restore;
};

TestStream.prototype.ignoreSync = function(options, fn) {
	expectFunction(arguments, "ignoreSync", "ignore");

	if (arguments.length === 1) {
		fn = options;
		options = {};
	}

	this.inspectSync(options, function() {
		fn();
	});
};

function expectNoFunction(args, calledFunction, functionToCallInstead) {
	if (args.length && typeof args[0] === 'function' || args.length > 1) {
		throw new Error(calledFunction + "() doesn't take a function parameter. Did you mean to call " +
			functionToCallInstead + "()?");
	}
}

function expectFunction(args, calledFunction, functionToCallInstead) {
	if (args.length === 0 || args.length > 2 || typeof args[args.length - 1] !== 'function') {
		throw new Error(calledFunction + "() requires a function parameter. Did you mean to call " +
			functionToCallInstead + "()?");
	}
}