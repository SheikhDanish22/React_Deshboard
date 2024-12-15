

import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update=()=>{
const [mydata, setMydata]=useState([]);
const navigate= useNavigate();

const loadData=()=>{
    let api="http://localhost:3000/Medical";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);
const myDel=(id)=>{
    let api=`http://localhost:3000/Medical/${id}`;
    axios.delete(api).then((res)=>{
        message.error("Record Sjuccesfully deleted!");
        loadData();
    })   
    
}


const myEdit=(id)=>{
    navigate(`/edit/${id}`);
}

const ans=mydata.map((key)=>{
    return(
        <>
          <tr>
            <td> {key.Tablet_Name}</td>
            <td> {key.Price}</td>
            <td> {key.Company_Name}</td>
            <td> {key.MNF}</td>
            <td>

          <a href="#" onClick={()=>{myEdit(key.id)}}>
          <FaEdit />
          </a>
         


        </td>
        <td>
            <a href="#" onClick={()=>{myDel(key.id)}}>
            <MdDelete />
            </a>
            </td>
          </tr>
        </>
    )
})
    return(
        <>
        <div style={{marginTop:"30px",marginLeft:"50px"}} >
         <h1> Update Medicine</h1>

         <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>Tablet Name</th>
          <th> Price</th>
          <th>Company Name</th>
          <th>MNF Date</th>
          <th></th>
          <th></th>
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
export default Update;