var express = require('express');
var router = express.Router();
const { VideoTable } = require('../models');

/* GET users listing. */
router.post('/create',async (req,res,next)=>{
    VideoTable.create({
        // Category_id:req.body.Category_id,
        User_id:req.body.User_id,
        Title:req.body.Title,
        Content:req.body.Content,
        Date:req.body.Content,
        View_content:req.body.View_content,
        Image:req.body.Image,
        Image_real:req.body.Image_real,
        Video_link:req.body.Video_link,
    })
    .then(result => {
        res.send("video_Create_Success");
    })
    .catch(err => {
        res.send("video_Create_Fail");
    })
});


module.exports = router;
