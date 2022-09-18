const util = require('util')
const fs = require('fs')
//将回调函数风格的方法转换成promise风格的函数
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('./sample.txt')
.then(value => {
    console.log(value.toString())
})