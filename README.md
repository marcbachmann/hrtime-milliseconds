
# hrtime-milliseconds

Calculates a diff in milliseconds between invocations. Originally I wanted to use `process.hrtime`, but it looks like `Date.now` is faster since it doesn't need any conversion.

### Usage

```
const start = require('hrtime-milliseconds')
const diff = start()
console.log(diff) // returns milliseconds

setTimeout(function () {
  start() // second invocation returns new diff since start
}, 100)
```


In case you'd like to keep the nanosecond precision, use another module.

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
