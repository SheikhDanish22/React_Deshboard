import { useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { message } from "antd";
const Search=()=>{
    const [Name, setName]=useState("");
    const [mydata, setMyadta]= useState([]);
    const [errrMsg, setErrMsg]= useState("");
    const handleSubmit=()=>{
     let api=`http://localhost:3000/Medical/?Tablet_Name=${Name}`;
     axios.get(api).then((res)=>{
        setMyadta(res.data);
          if (res.data.length<=0)
          {
            setErrMsg(message.error("No  found for this Tablet!"))
          }
          else 
          {
            setErrMsg("");
          }
     })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
             <tr>
                <td> {key.Tablet_Name} </td>
                <td> {key.Price} </td>
                <td> {key.Company_Name} </td>
                <td> {key.MNF} </td>
             </tr>            
            </>
        )
    });
    return(
        <>
        <div style={{marginLeft:"30px"}}>
         <h1> Search Tablet</h1>
         Enter Tablet Name : <input type="text" name="Name" 
         value={Name} onChange={(e)=>{setName(e.target.value)}} />
         <button onClick={handleSubmit}> Search</button>
         <hr />
         <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>Tablet Name</th>
          <th>Price</th>
          <th>Company Name</th>
          <th>MNF DATE</th>
        </tr>
      </thead>
      <tbody>
      {errrMsg}
      {ans}
    </tbody>
    </Table>  
    </div>     
        </>
    )
}
export default Search;