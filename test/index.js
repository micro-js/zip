/**
 * Imports
 */

var zip = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(zip([1, 2], [3, 4]), [[1, 3], [2, 4]])
  t.deepEqual(zip([1, 2], [3, 4], [5, 6]), [[1, 3, 5], [2, 4, 6]])

  t.end()
})
