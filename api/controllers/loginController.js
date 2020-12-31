'use strict';
module.exports ={
    getUser: (req,res)=>{
        res.json({"user":"dummy user"});

    },
    checkUser:(req,res)=>{
        if(req.query.user == 'nam'){
            res.json({"status":"ok"});
        }else{
            res.json({"status":"can not login"});
        }
    }
}