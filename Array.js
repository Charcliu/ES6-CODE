console.log(1, ...[2, 3, 4], 5)

function add(x, y) {
  return x + y
}
const numbers = [4, 38]
// 扩展运算符，将传入的数组变为参数序列
console.log(add(...numbers))
console.log(add.apply(null, numbers))

console.log(Math.max.apply(null, [14, 2, 77]))
console.log(Math.max(...[14, 2, 77]))
console.log(Math.max(14, 2, 77))

var a1 = [1, 2]
var a2 = [...a1]
a1[0] = 2
console.log(a1)
console.log(a2)

const arr1 = ['a', 'b']
const arr2 = ['c']
const arr3 = ['d', 'e']
console.log(arr1.concat(arr2, arr3))
console.log([...arr1, ...arr2, ...arr3])

const [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first, rest)

console.log([...'Hello'])

let map = new Map([[1, 'one'], [2, 'two'], [3, 'three']])
console.log([...map.keys()])
const set = new Set([1, 2, 3, 4])
console.log(...set)

var foo = function*() {
  yield 1
  yield 2
  yield 3
}
console.log(...foo())
