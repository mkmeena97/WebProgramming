import { useEffect, useState } from "react";

function GetExpREST_Comp(){
    const[emps,setEmps]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:9000/getEmps")
        .then(resp=>resp.json())
        .then(data=>setEmps(data))
    },[]);

    return (
        <div>
            <h1 style={{color:'blue'}}>Employee Data</h1>
            <table className="table table-hover">
                <tbody>
                    {
                        emps.map(v=>{
                            return(<div className="bg-gray">
                            <tr>
				                 <th>
					                {EMPNO}
				                 </th>
				                 <th>
					                {ENAME}
				                </th>
				                 <th>
					                {JOB}
				                </th>
				                <th>
					                {MGR}
				                 </th>
				                <th>
					                {HIREDATE}
				                 </th>
				                 <th>
					                {SALARY}
				                </th>
				                 <th>
					                {COMMISSION}
				                </th>
				                <th>
					                {DEPTNO}
				                </th>	
				            </tr>
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
				                <td>
                                    {v.MGR}
				                </td>
				                <td>
					                {v.HIREDATE}
				                 </td>
				                 <td>
					                {v.SAL}
				                 </td>
				                 <td>
					                {v.COMM}
				                </td>
				                <td>
					                {v.DEPTNO}
				                </td>
                                <td>
                                    {v.SAL}
                                </td>
                                <td>
                                    {v.MGR}
                                </td>
                                <td>
                                    {v.COMM}
                                </td>
                                <td>
                                    [v.DEPTNO]
                                </td>
                            </tr>
                            </div>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default GetExpREST_Comp;