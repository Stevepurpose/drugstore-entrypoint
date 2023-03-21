const express=require('express')
const router=express.Router()
const{getDrugs,addDrug,getDrug,removeDrug,updateDrug}=require('./drugController')

let authCheck=require('./requireAuth')

router.use(authCheck)

router.route("/")
      .get(getDrugs)
      .post(addDrug)

router.route("/:id")
      .get(getDrug)
      .delete(removeDrug)
      .patch(updateDrug)


module.exports=router