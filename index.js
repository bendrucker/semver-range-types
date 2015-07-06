'use strict'

var forOwn = require('for-own')
var exactVersion = require('exact-version')

module.exports = function semverRangeTypes (dependencies) {
  var operators = {
    '^': [],
    '~': [],
    '': [],
    other: []
  }

  forOwn(dependencies, parseSemver)

  return operators

  function parseSemver (semver, pkgName) {
    var firstChar = semver.charAt(0)

    if (firstChar in operators) {
      operators[firstChar].push(pkgName)
    } else if (exactVersion(semver)) {
      operators[''].push(pkgName)
    } else {
      operators.other.push(pkgName)
    }
  }
}
