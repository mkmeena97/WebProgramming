import { useState } from "react";

export default function Styledmsg()
{ const [color,setColor]=useState();
const [size,setSize]=useState();

const style ={
    color: color,
    fontSize: `${size}px`,

};

return(
    <div>
    <h1 style={style}>Welcome to REACT</h1>
    <label>Enter color:</label>
    <input type="text" name="color" onChange={(e)=>setColor(e.target.value)}/>
        <br/>
        <label>Enter Size:</label>
        <input type="number" value={size} onChange={(e)=>setSize(e.target.value)}/>
    </div>
)
}