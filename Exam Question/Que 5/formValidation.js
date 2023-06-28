import { useState } from "react";

function StudentForm_054(){

    const [fdate,setFdate]=useState();
    const [prn,setPrn]=useState();
    const [adhaar,setAdhaar]=useState();

    function checkData(){
       
       
        var patPrn = /^[(0-9)]{12}$/ ;

        var patAdhaar= /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/ ;

        var cdate= new Date().getFullYear();
        var bdate =new Date(fdate).getFullYear();
        var age= cdate-bdate;

      if(patPrn.test(prn)){
        if(age>21 && age<25){
             if(patAdr.test(adhaar)){

                document.getElementById("msg").innerHTML = "Data Submitted Succesfully"
            }
        }
    }
        else
            {
               var str="";
               str+="<ul>";
               str+="<li>PRN should be only 12 digits</li>";
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
                <input type="text" onChange={(e)=>{setAdhaar(e.target.value)}}/>
                <br />

                <button type="button"   onClick={checkData} >Register</button>
                
            </form>
            <div id="msg"></div>
        </div>
    );
}
export default StudentForm_001;