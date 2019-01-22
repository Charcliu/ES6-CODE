Number.isFinite(15) // true
Number.isFinite(0.8) // true
Number.isFinite(NaN) // false
Number.isFinite(Infinity) // false
Number.isFinite(-Infinity) // false
Number.isFinite('foo') // false
Number.isFinite('15') // false
Number.isFinite(true) // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
console.log(9 / NaN)
console.log('true' / 0)
console.log(Number.isNaN(true / 0))
console.log('true' / true)

isFinite(25) // true
isFinite('25') // true
Number.isFinite(25) // true
Number.isFinite('25') // false

console.log(Number.parseInt(12.34))
console.log(Number.parseFloat('12.345#'))

console.log(Number.parseInt === parseInt)

console.log(0.1 + 0.2 - 0.3 < Number.EPSILON * Math.pow(2, 2))

console.log(Math.trunc(1,23));