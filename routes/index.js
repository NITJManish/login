var express = require('express');
var router = express.Router();
var userModule=require('../modules/user');
/* GET home page. */

function checkUsername(req,res,next){
  var uname=req.body.uname;
  var checkexitemail=userModule.findOne({username:uname});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  
return res.render('signup', { title: 'Password Management System', msg:'Username Already Exit' });

 }
 next();
  });
}

function checkEmail(req,res,next){
  var email=req.body.email;
  var checkexitemail=userModule.findOne({email:email});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  
return res.render('signup', { title: 'Password Management System', msg:'Email Already Exit' });

 }
 next();
  });
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Password management system' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Password management system' });
});

router.post('/signup',checkUsername,checkEmail,function(req, res, next) {
        var username=req.body.uname;
        var email=req.body.email;
        var password=req.body.password;
        var confpassword=req.body.confpassword;
  if(password !=confpassword){
    res.render('signup', { title: 'Password Management System', msg:'Password not matched!' });
   
  }else{
   // password =bcrypt.hashSync(req.body.password,10);
        var userDetails=new userModule({
          username:username,
          email:email,
          password:password
        });
     userDetails.save((err,doc)=>{
        if(err) throw err;
        res.render('signup', { title: 'Password Management System', msg:'User Registerd Successfully' });
     })  ;
    } 

  
});

module.exports = router;
