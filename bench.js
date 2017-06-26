const browserTime = require('./')
const nanobench = require('nanobench')

function nodeTime () {
  const start = process.hrtime()
  return function () {
    const end = process.hrtime(start)
    return end[0] * 1000 + Math.floor(end[1] / 1000000)
  }
}

nanobench('10 million operations using Date.now', function (b) {
  for (var i = 10000000 - 1; i >= 0; i--) {
    const timer = browserTime()
    timer()
  }
  b.end()
})

nanobench('10 million using wrapped process.hrtime', function (b) {
  for (var i = 10000000 - 1; i >= 0; i--) {
    const timer = nodeTime()
    timer()
  }
  b.end()
})

nanobench('10 million operations directly using process.hrtime, without conversion', function (b) {
  for (var i = 10000000 - 1; i >= 0; i--) {
    const timer = process.hrtime()
    process.hrtime(timer)
  }
  b.end()
})
