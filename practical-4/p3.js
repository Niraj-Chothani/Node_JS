var fs = require('fs')

fs.readFile('string.txt',function(err,data){
    if(err){
        console.error(err)
    }
    var str = data.toString()
    var l = str.split("|")
    for(var i =0;i<l.length;i++){
        process.stdout.write(l[i] + " ");
    }
});