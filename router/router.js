const router=require('express').Router()
const userRepo=require('../contro/userCron')

router.post('/save',userRepo.add)

module.exports=router;