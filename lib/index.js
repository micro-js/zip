/**
 * Expose zip
 */

module.exports = zip

/**
 * zip
 */

function zip (/* arguments */) {
  var args = []
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  var result = []

  for (var i = 0; i < args[0].length; i++) {
    var item = []

    for (var j = 0; j < args.length; j++) {
      item.push(args[j][i])
    }

    result.push(item)
  }

  return result
}
