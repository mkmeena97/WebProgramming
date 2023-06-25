var exp=require('express');
var mysql=require('mysql2')

var app=exp();
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mkmeena97",
    database:"countryschema"
})
con.connect(function(err){
    if(!err)
    {
        console.log("countryschema database connected to server")
    }
    else
    {
        console.log("database connection error : "+err);
    }
})
app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/examque2.html")
})
app.get('/getcountries',function(req,res){
    var l=req.query.t1
    con.query("select countryname from country where countryname like '"+l+"%'",function(err,result){
        if(!err)
        {
            str="";
            result.forEach(function(v){
                str+="<option>"+v.countryname+"</option>"
            })
            console.log(str);
            res.send(str);
            res.end();
        }
        else
        {
            console.log(err);
        }
        
    })
})
app.listen(9000,function(){
    console.log("connected to localhost 9000");
})


