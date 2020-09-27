var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.post('/',async (req,res,next)=>{
    User.create({
      UserName:req.body.name,
      UserID:req.body.uid,
      UserPW:req.body.pw,
      StudentNumber:req.body.stunum,
      Access:req.body.ac,
      WR_Access:req.body.wrac,
    })
    .then(result => {
      res.send("테스트 성공");
    })
    .catch(err => {
      console.log("테스트 실패");
      res.send(err);
    })
});
module.exports = router;
