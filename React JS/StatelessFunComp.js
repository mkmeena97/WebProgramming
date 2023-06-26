import { useState } from "react";
import 'bootstrap'
import '../styles/mystyle.css'
function StatefulFunComp(){
    const[count,setCount]=useState(1);
    return(
        <div>
            <p>count:{count}</p>
            <button className="custom-btn-size" onClick={()=>{setCount(count+1)}}>Increase</button>
        </div>
    )
}

function StatefulFunComp1(){
    const[name,setName]=useState("tez")
    return(
        <div>
             <p>Name:{name}</p>
            <input  style={{width:"200px",borderRadius:"5px"}} type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
    )
}

export {StatefulFunComp,StatefulFunComp1}