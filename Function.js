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

function f(x = 1, y) {
  return [x, y]
}

console.log(f())
console.log(f(2))
console.log(f(undefined, 1))

console.log(f.length)
console.log(log.length)

// Rest参数

function add(...values) {
  let sum = 0
  for (let item of values) {
    sum += item
  }
  return sum
}

console.log(add(3, 4, 5))

// function sortNumbers() {
//   return Array.prototype.slice.call(arguments).sort()
// }

const sortNumbers = (...numbers) => numbers.sort()
console.log(sortNumbers(1, 2, 5, 8, 4, 7, 9, 2, 7))

// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
// 报错
// function f(a, ...b, c) {
//   // ...
// }

// name属性
function fn() {}
console.log(fn.name)
var fn = function() {}
console.log(fn.name)
console.log(new Function().name)
console.log(fn.bind({}).name)

// 箭头函数
var f = v => v
var f = function(v) {
  return v
}

var f = () => 5
var f = function() {
  return 5
}
var sum = (sum1, sum2) => sum1 + sum2
var sum = function(sum1, sum2) {
  return sum1 + sum2
}

var more = a => {
  if (a > 100) {
    return 100
  } else {
    return 99
  }
}
console.log(more(99), more(101))

var backObj = name => ({ name: name, temp: 'temp' })
console.log(backObj('Changlau'))
;[1, 2, 3].map(function(item) {
  return item * item
})
;[1, 2, 3].map(item => item * item)

const headAndTail = (head, ...tail) => [head, ...tail]
console.log(headAndTail(1, 2, 3, 4, 5))

function test1() {
  return test2()
}

function test2() {
  return test2.caller
}

console.log(test1())
