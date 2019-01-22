var str = 'Chang Lau'
console.log(str.valueOf())

var str = 'Hello World'
console.log(str.length)

// 字符方法
var str = 'www.coffeecola.cn'
console.log(str.charAt(1), str.charCodeAt(1), str[1])
console.log(String.fromCharCode(119))

//操作方法
// 拼接方法
var str = 'Hello'
// 不会修改原字符串本身
console.log(str.concat(' World', '!'))
console.log(str + ' World' + '!')

//基于操作字符串返回子字符串
// 1.三个方法都支持传递两个参数，第一个参数是指定子字符串的起始位置，第二个参数如果不传递，则默认表示字符串末尾
// 2.如果第二个参数传递，则slice和substring表示子字符串最后一个字符后面的位置，而substr则表示返回字符的长度
var str = 'www.coffeecola.cn'
// slice
console.log(str.slice(2))
console.log(str.slice(2, 8))
// substr
console.log(str.substr(2))
console.log(str.substr(2, 8))
// substring
console.log(str.substring(2))
console.log(str.substring(2, 8))

// 字符串位置方法
var str = 'www.coffeecola.cn'
// 从一个字符串搜索指定字符串，然后返回子字符串的位置（没有找到返回-1）
console.log(str.indexOf('o')) // 正向查询
console.log(str.lastIndexOf('o')) // 方向查询

// 第二个参数表示字符串从那个位置开始搜索，indexOf从指定位置向后搜索，lastIndexOf从指定位置向前搜索
console.log(str.indexOf('o', 6))
console.log(str.lastIndexOf('o', 6))

// 通过循环调用indexOf来匹配所有子字符串
var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
var arr = []
pos = str.indexOf('e')

while (pos > -1) {
  arr.push(pos)
  pos = str.indexOf('e', pos + 1)
}
console.log(arr)

// trim消除字符串首位空格
var str = '   www.coffeecola.cn    '
console.log(str.trim())

var str = 'Www.CoffEEcola.cn'
console.log(str.toLowerCase())
console.log(str.toUpperCase())

var str = 'www.coffeecola.cn'
var reg = /co/
console.log(str.match(reg))
console.log(reg.exec(str))
console.log(str.search(reg))
console.log(str.replace('co', 'xx'))
console.log(str.replace(reg, 'xx'))
console.log(str.replace(/co/g, 'xx'))
console.log(str.split(reg))
console.log(str.split('co'))

var str = 'hello'
for (index in str) {
  console.log(str.charCodeAt(index))
  console.log(String.fromCharCode(str.charCodeAt(index)))
}
