var exp=require('express');
var bp=require('body-parser')

var app=exp();
app.use(bp.urlencoded({extended:false}));
app.listen(9000,function(){
        console.log("server connected at port No. 9000");
})

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/Student_prn_054_form.html");
})

app.post('/getDataTable',function(req,res){
    var nm=req.body.name;
    var date=req.body.bdate;
    var emailid=req.body.email;
    var qlf=req.body.q;

    str="";
    str+="<table>"
    str+="<tr>"
    str+="<td>"+nm+"</td>"
    str+="<td>"+date+"</td>"
    str+="<td>"+emailid+"</td>"
    str+="<td>"+qlf+"</td>"
    
    str+="</tr>"

    str+="</table>"

    res.send(str);
    res.end();
    

})