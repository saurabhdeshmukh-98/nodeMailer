const express = require('express')
const app = express()
const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")
const custumCron=require('./cron')
const router = require('./router/router')
custumCron.sendMail;

app.use('/',router)
app.listen(3000,()=>{
console.log("port listening at 3000")
})