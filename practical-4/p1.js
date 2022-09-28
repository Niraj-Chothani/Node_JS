var fs = require('fs')

fs.readFile('p1.txt',function(err,data){
    if(err){
        console.error(err)
    }
    var str = data.toString()
    var l = str.split(" ")
    var num1 = parseInt(l[0])
    var num2 = parseInt(l[1])
    console.log("Addition of 2 numbers : " + (num1+num2))
    console.log("Subtraction of 2 numbers : " + (num1-num2))
    console.log("Multiplication of 2 numbers : " + (num1*num2))
    console.log("Division of 2 numbers : " + (num1/num2))
});