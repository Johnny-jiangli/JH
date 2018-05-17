var express = require('express');
var router = express.Router();

var users = [];


router.get('/list/admin',function(req,res) {

        res.render('test/admin',{title:"hello world"})
},function (req,res) {
    console.log('多个回调')
});


router.post('/list/new',function(req,res) {
    console.log(req.body);
     var content = req.body;
     users.push(content);

     console.log(content.content);
     res.redirect('test/hello')
});

router.get('/list/test/hello',function (req,res,next) {
    console.log("hahahah");
    console.log(users);
    res.render('test/list',{user:users})
});

// router.get('/admin',function(req,res) {
//
//     res.render('test/admin',{title:"小陈"})
// });

module.exports = router;