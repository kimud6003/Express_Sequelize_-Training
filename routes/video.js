var express = require('express');
var router = express.Router();
const sequelize = require("sequelize");
const { User,VideoTable} = require('../models');
const Op = sequelize.Op;

//모든 게시글 조회
router.get('/', function(req, res, next) {
    VideoTable.findAll({raw: true}).then(result => {
      console.log(result);
    });
  });

//원하는 데이터 제목으로 찾기 
router.get('/:title', function(req, res, next) {
    VideoTable.findAll({
        where:{Title:{
            [Op.like]: "%"+req.params.title+"%"
        }}
    }).then( result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
});

// 글쓰기
router.post('/:id',async (req,res,next)=>{
    User.findAll({
        where:{
            id:req.params.id
        }
    }).then(result=>{
        if(result[0].WR_Access){
            VideoTable.create({
                Video_Category_Id:req.body.catid,
                User_id:req.body.user_id,
                Title:req.body.title,
                Content:req.body.content,
                Video_link:req.body.video,
            }).then(result => {
                res.send("오우 축하해열~ 작성했어열~ 1010");
            }).catch(err => {
                res.send(err);
                next(err);
            })
        }
    })
});

//수정하기
router.patch('/:id',async (req,res,next)=>{
    VideoTable.update({
        Title:req.body.title,
        Content:req.body.content,
        Video_link:req.body.video,
    },{where:{id:req.params.id}})
    .then((result)=>{
        if(result) res.send("업데이트 성공");
        else res.send("이상해!");
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })

});

router.delete('/:id',async (req,res,next)=>{
    VideoTable.destroy({where:{id: req.params.id}})
    .then((result)=> {
        if(result) res.send("삭제 성공");
        else res.send("삭제할게 있나용??");
    })
    .catch((err) => {
        console.log(err);
        next(err);
    })
});


module.exports = router;
