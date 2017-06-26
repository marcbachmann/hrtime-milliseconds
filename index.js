module.exports = start

function start () {
  const time = Date.now()
  return function end () {
    return Date.now() - time
  }
}
