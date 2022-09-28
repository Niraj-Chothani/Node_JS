var fs = require('fs')

try{
    if(fs.existsSync('7.txt')){
        fs.unlink('7.txt',function(err){
            if(err){
                console.error(err)
            }
            else{
                console.log("File deleted successfully.")
            }
        });
    }
    else throw 'File does not Exist'
}catch(err){
    console.log(err)
}