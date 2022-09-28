var fs = require('fs')

try{
    if(fs.existsSync('6.txt')){
        fs.rename('6.txt','P6.txt',function(err){
            if(err){
                console.error(err)
            }
            else{
                console.log("File renamed successfully.")
            }
        });   
    }
    else throw 'File does not Exist' 
}
catch(err){
    console.log(err)
}

