// Copyright (c) 2014-2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var assert = require("chai").assert;
var stdout = require("./index.js").stdout;
var stderr = require("./index.js").stderr;

describe("'synchronous' inspect", function() {

	it("calls passed-in function synchronously", function() {
		var fnCalled = false;
		var inspectReturned = false;
		stdout.inspectSync(function(output) {
			fnCalled = true;
			assert.isFalse(inspectReturned, "function should be called before inspect call returns");
		});
		inspectReturned = true;
		assert.isTrue(fnCalled, "function should have been called");
	});

	it("fails nicely when user forgets to pass in a function", function() {
		var errMsg = "inspectSync() requires a function parameter. Did you mean to call inspect()?";
		assert.throws(function() {
			stdout.inspectSync();
		}, errMsg);
		assert.throws(function() {
			stdout.inspectSync({});
		}, errMsg);
	});

	it("provides writes to passed-in function", function() {
		stdout.inspectSync(function(output) {
			assert.deepEqual(output, [], "nothing written");

			process.stdout.write("foo");
			assert.deepEqual(output, ["foo"], "one call to stdout.write()");

			process.stdout.write("bar");
			process.stdout.write("baz");
			assert.deepEqual(output, ["foo", "bar", "baz"], "multiple calls to stdout.write()");
		});
	});

	it("supports console.log", function() {
		stdout.inspectSync(function(output) {
			console.log("quux");
			assert.deepEqual(output, ["quux\n"], "console.log()");
		});
	});

	it("prevents output to console", function() {
		// This is a bit weird. We're going to assume inspectSync() works and use it to test inspectSync(). Inception!
		stdout.inspectSync(function(output) {
			stdout.inspectSync(function() {
				console.log("foo");
			});
			assert.deepEqual(output, [], "console should be suppressed");
		});
	});

	it("mocks isTTY value", function() {
		var originalIsTTY = process.stdout.isTTY;
		stdout.inspectSync({ isTTY: !originalIsTTY }, function() {
			assert.equal(process.stdout.isTTY, !originalIsTTY, 'isTTY should be changed');
		});
		assert.equal(process.stdout.isTTY, originalIsTTY, 'isTTY should be restored');
	});

	it("uses existing isTTY value by default", function() {
		// Testing for various argument lists
		var originalIsTTY = process.stdout.isTTY;
		stdout.inspectSync(function() {
			assert.equal(process.stdout.isTTY, originalIsTTY, 'isTTY should not be changed');
		});
		stdout.inspectSync({}, function() {
			assert.equal(process.stdout.isTTY, originalIsTTY, 'isTTY should not be changed');
		});

		// testing for both original values of isTTY for failure modes that don't occur for both isTTY=false and isTTY=true
		stdout.inspectSync({ isTTY: true }, function() {
			stdout.inspectSync(function() {
				assert.equal(process.stdout.isTTY, true, 'isTTY should still be true if original value was true');
			});
		});

		stdout.inspectSync({ isTTY: false }, function() {
			stdout.inspectSync(function() {
				assert.equal(process.stdout.isTTY, false, 'isTTY should still be false if original value was false');
			});
		});
	});

	it("restores old behavior when done", function() {
		// More inception!
		stdout.inspectSync(function(output) {
			var originalIsTTY = process.stdout.isTTY;
			stdout.inspectSync({ isTTY: !originalIsTTY }, function() {
				// this space intentionally left blank
			});
			console.log("foo");
			assert.deepEqual(output, ["foo\n"], "console should be restored");
			assert.equal(process.stdout.isTTY, originalIsTTY, 'isTTY should be restored');
		});
	});

	it("restores old behavior even when an exception occurs", function() {
		// inception!
		stdout.inspectSync(function(output) {
			var originalIsTTY = process.stdout.isTTY;
			var exceptionPropagated = false;
			try {
				stdout.inspectSync({ isTTY: !process.stdout.isTTY }, function() {
					throw new Error("intentional exception");
				});
			}
			catch(err) {
				exceptionPropagated = true;
			}
			assert.isTrue(exceptionPropagated, "exception should be propagated");
			console.log("foo");
			assert.deepEqual(output, ["foo\n"], "console should be restored");
			assert.equal(process.stdout.isTTY, originalIsTTY, 'isTTY should be restored');
		});
	});

	it("also returns output", function() {
		var output = stdout.inspectSync(function() {
			console.log("foo");
		});
		assert.deepEqual(output, ["foo\n"], "returned output");
	});
});


describe("'asynchronous' inspect", function() {

	it("fails nicely when user confuses it for inspectSync and passes in a function", function() {
		var errMsg = "inspect() doesn't take a function parameter. Did you mean to call inspectSync()?";
		assert.throws(function() {
			stdout.inspect(function() {});
		}, errMsg);
		assert.throws(function() {
			stdout.inspect({}, function() {});
		}, errMsg);
	});

	it("is like synchronous version, except you have to restore it manually", function() {
		var inspect = stdout.inspect();
		console.log("foo");
		assert.deepEqual(inspect.output, ["foo\n"], "output");
		inspect.restore();
	});

	it("prevents output to console until restored", function() {
		// inception!
		stdout.inspectSync(function(output) {
			var inspect = stdout.inspect();

			console.log("foo");
			assert.deepEqual(output, [], "console should be suppressed");

			inspect.restore();
			console.log("bar");
			assert.deepEqual(output, ["bar\n"], "console should be restored");
		});
	});

});


describe("'synchronous' ignore", function() {

	it("fails nicely when user forgets to pass in a function", function() {
		assert.throws(function() {
			stdout.ignoreSync();
		}, "ignoreSync() requires a function parameter. Did you mean to call ignore()?");
	});

	it("simply disables output to console", function() {
		// We'll use inspect() to make sure ignore() works. Inception! (Okay, that joke's getting old. Too bad! Mwahaha!)
		stdout.inspectSync(function(output) {
			stdout.ignoreSync(function() {
				console.log("foo");
			});
			assert.deepEqual(output, [], "console should be ignored");
			console.log("bar");
			assert.deepEqual(output, ["bar\n"], "console should be restored");
		});
	});

	it("doesn't provide any parameters", function() {
		stdout.ignoreSync(function() {
			assert.equal(arguments.length, 0, "# of arguments");
		});
	});

});


describe("'asynchronous' ignore", function() {

	it("fails nicely when user confuses it for ignoreSync and passes in a function", function() {
		assert.throws(function() {
			stdout.ignore(function() {});
		}, "ignore() doesn't take a function parameter. Did you mean to call ignoreSync()?");
	});

	it("is like synchronous version, except you have to restore it manually", function() {
		// inception!
		stdout.inspectSync(function(output) {
			var restore = stdout.ignore();

			console.log("foo");
			assert.deepEqual(output, [], "console should be suppressed");

			restore();
			console.log("bar");
			assert.deepEqual(output, ["bar\n"], "console should be restored");
		});
	});

});


describe("stderr", function() {

	it("has everything stdout does, only for stderr", function() {
		assert.isDefined(stderr.inspect, "inspect");
		assert.isDefined(stderr.inspectSync, "inspectSync");
		assert.isDefined(stderr.ignore, "ignore");
		assert.isDefined(stderr.ignoreSync, "ignoreSync");
	});

	it("actually works", function() {
		var inspect = stderr.inspect();
		process.stderr.write("foo");
		assert.deepEqual(inspect.output, ["foo"], "output");
		inspect.restore();
	});

});