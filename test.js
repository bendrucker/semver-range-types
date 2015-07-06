'use strict'

var test = require('tape')
var types = require('./')

test(function (t) {
  var dependencies = {
    'foo': '~1.0.0',
    'bar': '^1.0.0',
    'baz': '1.0.0',
    'qux': '>= 1.0.0'
  }
  t.deepEqual(types(dependencies), {
    '~': ['foo'],
    '^': ['bar'],
    '': ['baz'],
    other: ['qux']
  })
  t.end()
})
