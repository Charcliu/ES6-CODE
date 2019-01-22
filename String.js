// 字符串遍历
const txt = 'www.coffeecola.cn'
for (var item of txt) console.log(item)

// inclues startsWith endsWith
console.log(txt.includes('coffeecola'))
console.log(txt.startsWith('www'))
console.log(txt.endsWith('cn'))

// repeat
console.log(txt.repeat(0.1))
console.log(txt.repeat(2))
// 取整
console.log(txt.repeat(2.9))

// padStart padEnd
console.log(txt.padStart(txt.length + 8, 'https://'))
console.log(txt.padEnd(txt.length + 8, '/#/login'))

var reg = /o/
console.log(txt.match(reg))
// Node不支持 v10.8.0
// console.log(txt.matchAll(reg));
var reg = /o/g
console.log(txt.match(reg))

var name = 'ChangLau'
var str = `
  \`Hello, my Name is ${name}\`
`
console.log(str)
var a = 1,
  b = 2
// 模板字符串可以进行JS运算
console.log(`${a} add ${b} equals ${a + b}`)
