var regex = new RegExp('xyz', 'i')
var regex = /xyz/i

var regex = new RegExp(/xyz/i)

var regex = new RegExp(/xyz/i, 'g')
console.log(regex.flags)
console.log(regex.unicode)

var str = 'aaa_aa_a'
var reg1 = /a+/g
var reg2 = /a+/y
console.log(reg1.exec(str))
console.log(reg1.exec(str))
console.log(reg1.exec(str))
console.log(reg1.exec(str))

console.log(reg2.exec(str))
console.log(reg2.exec(str))
console.log('------')
var regex = /a/g
regex.lastIndex = 2
console.log(regex.exec('xaya'))
var regex1 = /a/y
regex1.lastIndex = 2
console.log(regex1.exec('xaya'))
regex1.lastIndex = 3
console.log(regex1.exec('xaya'))

console.log(regex1.sticky)

var str = 'hello\nworld'
var reg = /hello.world/
console.log(reg.exec(str))
var reg = /hello.world/s
console.log(reg.exec(str))
console.log(reg.dotAll, reg.flags)
