const cron =require("node-cron");//node-crone
const fs =require("fs");
//const { error } = require("console");



cron.schedule("* * * * *",()=>{

    const currentTime=new Date();
    const logMessage=`server checked at: ${currentTime}\n`;



fs.appendFile("server-log.text", logMessage,(err)=> {
        if (err) {
          console.error("error with to file writing ") 
         }else {
                console.log("saved!");

            }
        });
    });
    console .log("cron job started...");