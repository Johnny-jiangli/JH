var router = require('express').Router();

router.get('/mid/:id' ,function (req,res,next) {
   if(req.params.id == 0) next();
   else next('route')
},function (req,res,next) {
    res.render('test/admin',{title:"当请求ulr中解析id为零时则进入这个页面"})
});

router.get('/mid/:id',function (req,res,next) {
    if(req.params.id == 2) {
    console.log(req.params.id);
    res.render('test/test',{title:"params为2"})
    }else {
        next('route')
    }
})


router.get('/mid/:id',function (req,res,next) {
    res.render('test/hello')
});


module.exports =router;