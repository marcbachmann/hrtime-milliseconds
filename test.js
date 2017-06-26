const assert = require('assert')
const hrtime = require('./')

const timer = hrtime()
const diff = timer()
assert.ok(diff === 0)

const timer2 = hrtime()
const dateTimer = Date.now()
setTimeout(function () {
  const diff = timer2()
  const dateTimerDiff = Date.now() - dateTimer
  assert(diff === dateTimerDiff, `Diff should be equal to Date.now() diff but got ${diff} and ${dateTimerDiff}`)
}, 100)

// setTimeout isn't reliable enough
// therefore I had to use some ranges
const timer3 = hrtime()
setTimeout(function () {
  const diff = timer3()
  assert(diff >= 1500 && diff < 1510, `Diff should be between 100ms and 110ms but got ${diff}`)
}, 1500)

const timer4 = hrtime()
setTimeout(function () {
  const diff = timer4()
  assert(diff >= 1500 && diff < 1510, `Diff should be between 100ms and 110ms but got ${diff}`)

  // second call
  setTimeout(function () {
    const diff = timer4()
    assert(diff >= 1700 && diff < 1720, `Diff should be between 100ms and 110ms but got ${diff}`)
  }, 200)
}, 1500)
