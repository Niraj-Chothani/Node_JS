var fs = require('fs')

var content = "\nHi \nHello \nHow are you?"
fs.appendFile('p8.txt',content,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("File appended successfully.")
    }
});