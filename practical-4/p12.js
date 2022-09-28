var path = require('path')

var file = path.parse('H:/BACKUP/node/myexamples/CIRCLE.js')

console.log(`Root : ${file.root}`)
console.log(`Dir : ${file.dir}`)
console.log(`Base : ${file.base}`)
console.log(`Name : ${file.name}`)
console.log(`Extention : ${file.ext}`)