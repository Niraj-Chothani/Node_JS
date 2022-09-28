var fs = require('fs')

fs.writeFile('5.txt',"",err=>{
    if(err){
        console.error(err)
    }
    console.log("File created Successfully.")
});