# Vis UUID

UUID (version 1 and 4) generation library.
Also offers conversion methods between string representation and binary (array of numbers or Uint8Array) representation.
Comes in UMD version for good compatibility and ESM version ready for treeshaking.

This module is a part of the [visjs project](https://github.com/visjs).

## Documentation

<https://visjs.github.io/vis-uuid/>

## Building the project

Clone the project:
```
git clone https://github.com/visjs/vis-uuid.git
```

Install dependencies:
```
npm i
```

Build the project (builds types, code and docs):
```
npm run build
```

### Building individual parts

- Code: ```npm run build:code```
- Docs: ```npm run build:docs```
- Types: ```npm run build:types```

### Other scripts

- Clean built files: ```npm run clean```
- Lint: ```npm run lint```
- Reformat: ```npm run fix```
- Test: ```npm run build```
- Type check: ```npm run type-check```

## License

This project is dual licensed under

The Apache 2.0 License http://www.apache.org/licenses/LICENSE-2.0

and

The MIT License http://opensource.org/licenses/MIT

Vis UUID may be distributed under either license.

## Original sources

- https://github.com/almende/vis/blob/master/lib/module/uuid.js
- https://github.com/almende/vis/blob/master/test/util.test.js
