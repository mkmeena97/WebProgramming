import { useEffect, useState } from "react";

export default function GetExpREST_Comp(){
    const[emps,setEmps]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:9000/getEmps")
        .then(resp=>resp.json())
        .then(data=>setEmps(data))
    },[]);

    return (
        <div>
            <h1>Emp Data</h1>
            <table className="table table-hover">
                <tbody>
                    {
                        emps.map(v=>{
                            return(
                                <tr>
                                    <td>
                                        {v.EMPNO}
                                    </td>
                                    <td>
                                        {v.ENAME}
                                    </td>
                                    <td>
                                        {v.JOB}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}