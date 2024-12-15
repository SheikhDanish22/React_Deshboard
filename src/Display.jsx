import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/Medical";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.Tablet_Name}</td>
                <td>{key.Price}</td>
                <td>{key.Company_Name}</td>
                <td>{key.MNF}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <div style={{marginTop:"30px",marginLeft:"50px"}}>
        <h1> Display Tablet Details</h1>
        
         <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        
        <tr>
          <th>Tablet Name</th>
          <th>Price</th>
          <th>Comapny Name</th>
          <th>MNF</th>
        </tr>
      </thead>
      <tbody>
    
      {ans}
    </tbody>
    </Table>
    </div>
        </>
    )
}
export default Display;