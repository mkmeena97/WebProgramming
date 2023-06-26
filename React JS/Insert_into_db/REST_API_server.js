var exp=require('express');
var mysql=require('mysql2');
var cors=require('cors');
var bp=require('body-parser');

var app=exp();
app.use(bp.json());
app.use(cors());
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mkmeena97",
    database:"mydac"
})
con.connect(function(err){
    if(!err)
    console.log("Database  conneted ")
    else
    console.log("Database Connection failed due to : "+err);
})
app.get('/getEmps',function(req,res){
    con.query('select * from emp',function(err,result){
        if(!err)
        {
            //res.send(JSON.stringify(result))
            res.json(result);
        }
    } )
})
app.post('/insertEmp',function(req,res){
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    var dept=req.body.dept;

    var query="insert into emp(EMPNO,ENAME,SAL,DEPTNO) values (?,?,?,?)";

    con.query(query,[empid,ename,sal,dept],function(err){
        if(!err)
            res.send("Insertion complete")
        else
            res.send("Insertion failed Due to : "+err);
    })
})


app.listen(9000,function(err){
    if(!err)
    console.log("server connected at 9000")
    else
    console.log("server Connection Error : "+err);
})
