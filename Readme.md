
# zip

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Zip two or more arrays together

## Installation

    $ npm install @f/zip

## Usage

```js
var zip = require('@f/zip')

zip([1, 2], [3, 4])         // -> [[1, 3], [2, 4]]
zip([1, 2], [3, 4], [5, 6]) // -> [[1, 3, 5], [2, 4, 6]]
```

## API

### zip(...arrays)

- `arrays` - The arrays to zip together

**Returns:** The zipped arrays

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/zip.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/zip
[git-image]: https://img.shields.io/github/tag/micro-js/zip.svg?style=flat-square
[git-url]: https://github.com/micro-js/zip
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/zip.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/zip
