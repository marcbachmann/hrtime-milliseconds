
# hrtime-milliseconds

Calculates a diff in milliseconds between invocations. Originally I wanted to use `process.hrtime`, but it looks like `Date.now` is faster since it doesn't need any conversion.

### Usage

```
const start = require('hrtime-milliseconds')

// Create an instance
const diff = start()

// Then invoke the returned function to get the time since its' creation
// It returns an integer that defines how many milliseconds passed (here it's 0 as we're in the same tick)
console.log(diff())

setTimeout(function () {
  // second invocation returns new diff since start, so we'll see 100
  console.log(diff())
}, 100)
```


In case you need nanosecond precision, please use https://github.com/sindresorhus/time-span.

### Benchmark

```
NANOBENCH version 2
> /Users/marcbachmann/.nvm/versions/node/v8.1.2/bin/node bench.js

# 10 million operations using Date.now
ok ~1.74 s (1 s + 740748587 ns)

# 10 million using wrapped process.hrtime
ok ~1.99 s (1 s + 985111399 ns)

# 10 million operations directly using process.hrtime, without conversion
ok ~1.54 s (1 s + 540457122 ns)

all benchmarks completed
ok ~5.27 s (5 s + 266317108 ns)
```
