import { useReducer, useState } from "react";

//needed for useReducer 
const initialState={
    empid:{value:0,hasError:true,error:"",touched:false},
    ename:{value:"",hasError:true,error:"",touched:false},
    sal:{value:0,hasError:true,error:"",touched:false},
    dept:{value:0,hasError:true,error:"",touched:false},
    isFormValid:false
}

// needed for useReducer
const reducer = (state,action)=>{
    switch(action.type){
        case 'update':
            //return {...state,[action.fld]:action.value}
            const{name,value,hasError,error,touched,isFormValid}=action.data;
            return{...state,[name]:{value,hasError,error,touched},isFormValid}

        case 'reset':
            return initialState    
    }
}

let FormValidation = ()=>{
        const[emp,dispatch]=useReducer(reducer,initialState);
        const[msg,setMsg]=useState("");

    const handleChange=(name,value)=>{
        //(a). call validation logic
        const{hasError,error}=validateData(name,value);

        //(b). check for validity status
        let isFormValid=true;
        for(const key in emp)
        {
            console.log(key+" : "+emp[key].hasError)
            if(emp[key].hasError===true)
            {
                isFormValid=false;
                break;
            }
        }

        //(c). call dispatch method
        dispatch({type:'update',data:{name,value,hasError,error,touched:true,isFormValid}})

    }

    const validateData=(name,value)=>{
        let hasError=false;
        let error="0";
        switch(name){
            case 'empid':
                var empidPattern=/^[0-9]{4,6}$/
                if(!empidPattern.test(value))
                {
                    hasError=true;
                    error="Empid should be 4-6 digits"
                }
                break;
            case 'ename':
                var namePattern= /^[A-Z][a-z]{2,15}$/;
                if(!namePattern.test(value))
                {
                    hasError=true;
                    error="First letter must be capital,rest small(max length 15)";
                } 
                break;
            case 'sal' :
                var salPattern= /^[0-9]{3,15}$/;
                if(!salPattern.test(value))
                {
                    hasError=true;
                    error="salary must be 3-15 digits"
                }
                break;
            case 'dept':
                var deptPattern=/^[0-9]{2}$/
                if(!deptPattern.test(value))
                {
                    hasError=true;
                    error="Department Number must be 2 digit"
                } 
                break;       

        }
        return {hasError,error}
    }

    const submitData=(ev)=>{
        ev.preventDefault()
        //send data to the server to insert into database
        const reqOption={
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                empid:emp.empid.value,
                ename:emp.ename.value,
                sal:emp.sal.value,
                dept:emp.dept.value
            })
        }
        fetch("http://localhost:9000/insertEmp",reqOption)
        .then(res=>res.text())
        .then(data=>setMsg(data))
    }

    return(
        <div>
            <h1>Emp Form</h1>
            <form>
                Enter empid :
                <input type="text" name="empid" value={emp.empid.value}
                    onChange={(e)=>{handleChange("empid",e.target.value)}}
                ></input>
                <br></br>
                <div style={{display:emp.empid.touched && emp.empid.hasError?"block":"none"}}>
                    {emp.empid.error}
                </div>

                Enter Name : 
                <input type="text" name="ename" value={emp.ename.value}
                    onChange={(e)=>{handleChange("ename",e.target.value)}}
                ></input>
                <br></br>
                <div style={{display:emp.ename.touched && emp.ename.hasError?"block":"none"}}>
                    {emp.ename.error}
                </div>

                Enter Salary : 
                <input type="number" name="salary" value={emp.sal.value}
                    onChange={(e)=>{handleChange("sal",e.target.value)}}
                ></input>
                <br></br>
                <div style={{display:emp.sal.touched && emp.sal.hasError?"block":"none"}}>
                    {emp.sal.error}
                </div>

                Enter Dept number : 
                <input type="number" name="deptno" value={emp.dept.value}
                    onChange={(e)=>{handleChange("dept",e.target.value)}}
                ></input>
                <br></br>
                <div style={{display:emp.dept.touched && emp.dept.hasError?"block":"none"}}>
                    {emp.dept.error}
                </div>

                <input type="submit" value="submit"
                onClick={(e)=>{submitData(e)}}/>

                <input type="button" value="clear"
                onClick={()=>{dispatch({type:'reset'})}}/>
            </form>
            <p>{msg}</p>
        </div>
    )


}
export default FormValidation;