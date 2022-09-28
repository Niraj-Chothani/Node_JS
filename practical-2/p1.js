var r=require('readline') 
var r1=r.createInterface(process.stdin,process.stdout); 
r1.question("Enter Your Name ",function(name){     
    r1.question("Enter Your Age ",function(age){         
        r1.question("Enter Your Email ID ",function(email){             
            r1.question("Enter Your Mobile Number ",function(mobile){                 
                if(age<18){                     
                    console.log("Minimum required 18 years and your age is "+age+" You should wait at least "+(18-age)+" year(s) more") 
                }                 
                else{                     
                    console.log("Great "+name+" you are elegible for sign in!") 
                    console.log("Your Name is "+name)                     
                    console.log("Your Age is "+age)                     
                    console.log("Your Email ID is "+email)                     
                    console.log("Your Mobile Number is "+mobile) 
                }                 
                process.exit(); 
            }) 
        }) 
    }) 
}) 
