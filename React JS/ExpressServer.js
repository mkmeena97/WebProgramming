var exp=require('express');
var mysql=require('mysql2');
var bp=require('body-parser')


var app=exp();
app.use(bp.urlencoded({extended:false}));
app.use(exp.static('resource'));


var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mkmeena97",
    database:"mydac"
})
con.connect(function(err){
    if(!err)
    {
        console.log("mydac database Connected to the server");
    }
    else
    console.log("Database connection error : "+err);
})
app.get('/deptform',function(req,res){
    res.sendFile(__dirname+"/dept_emp.html");
})
app.post('/getemps',function(req,res){
    var dno=req.body.deptno;
    console.log("deptno : "+dno);

    con.query("select * from emp where DEPTNO ="+dno,function(err,result){
        if(!err)
        {
            console.log("result length : "+result.length);
            res.send(JSON.stringify(result));
        }
    })
})
app.listen(9000,function(){
    console.log("server is connected");
})