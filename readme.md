# semver-range-types [![Build Status](https://travis-ci.org/bendrucker/semver-range-types.svg?branch=master)](https://travis-ci.org/bendrucker/semver-range-types) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/semver-range-types.svg)](https://greenkeeper.io/)

> Parse the semver range types from a dependencies object


## Install

```
$ npm install --save semver-range-types
```


## Usage

```js
var semverRangeTypes = require('semver-range-types')

semverRangeTypes({foo: '~1.2.3'})
//=> {'~': ['foo'], '^': [], '': [], other: []}
```

Packages are categorized by their semver operator: 

* `~`
* `^`
* none (an exact version)
* other (an arbitrary range, e.g. `>= 4.0.0 <= 10.0.0`)

## API

#### `semverRangeTypes(dependencies)` -> `object`

##### dependencies

*Required*  
Type: `string`

A dependency object, like the ones in package.json.

## License

MIT © [Ben Drucker](http://bendrucker.me)
