function log(x, y) {
  y = y || 'World'
  console.log(x, y)
}

console.log(log('Hello'))
console.log(log('Hello', 'ChangLau'))

function defaultLog(x, y = 'World') {
  console.log(x, y)
}

console.log(defaultLog('Hello'))
console.log(defaultLog('Hello', 'ChangLau'))

function point(x = 0, y = 0) {
  this.x = x
  this.y = y
}

console.log(new point())

let x = 99
function foo(p = x + 1) {
  console.log(p)
}
console.log(foo()) // 100
x = 100
console.log(foo()) // 101
console.log(foo(123)) // 123

function obj({ x, y = 5 }) {
  console.log(x, y)
}

obj({})
obj({ x: 1 })
obj({ x: 1, y: 2 })
