import { useState } from "react";

function ExamForm(){

    const [fdate,setFdate]=useState();
    const [prn,setPrn]=useState();
    const [adr,setAdr]=useState();

    function checkData(){
       
       
        var patPrn = /^[(0-9)]{12}$/ ;
        var patAdr= /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/ ;
        var cdate= new Date().getFullYear();
        var bdate =new Date(fdate).getFullYear();
        var age= cdate-bdate;

      if(patPrn.test(prn)){
        if(age>21 && age<25){
             if(patAdr.test(adr)){

                document.getElementById("msg").innerHTML = "Data Submitted Succesfully"
            }
        }
    }
        else
            {
               var str="";
               str+="<ul>";
               str+="<li>Age should be between 21 to 25</li>";
               str+="<li>PRN only 12 digits</li>";
               str+="<li>Enter valid Aadhaar number</li>";
               str+="</ul>";

                document.getElementById("msg").innerHTML = str;
            }
    }

    return(
        <div>
            <h2>Form Validation</h2>
            <form>
                Enter Birth date :
                <input type="date" onChange={(e)=>{setFdate(e.target.value)}}></input>
                <br/>
                Enter PRN :
                <input type="text"  onChange={(e)=>{setPrn(e.target.value)}} />
                <br/>
                Enter Aadhar No:
                <input type="text" onChange={(e)=>{setAdr(e.target.value)}}/>
                <br />

                <button type="button"   onClick={checkData} >Register</button>
                
            </form>
            <div id="msg"></div>
        </div>
    );
}
export default ExamForm;