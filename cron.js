const User=require('./model/user')
const config=require('./config/db')
const nodeMailer=require('nodemailer')
const cron=require('node-cron')

const sendMail=()=>{
    try {
        cron.schedule('* * * * * * ',async function(){
            const resp= await User.find({})
            if(resp.length>0){
                var emails=[];
                resp.map((key)=>{
                  emails.push(key.email)
                })
                console.log(emails)
            }
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports={sendMail}