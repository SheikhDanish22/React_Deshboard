import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';
import {message} from 'antd';

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/Medical";
        axios.post(api,input).then((res)=>{
            message.success("Tablet insert")
        });
    }
    return(
        
        
        <>
        <div id='table'>
         <h1 style={{paddingLeft:"150px"}}> Insert Books</h1>
         
         <Form style={{width:"50%", paddingLeft:"25%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tablet_Name</Form.Label>
        <Form.Control type="text" name="Tablet_Name" value={input.Tablet_Name}  onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="Price" value={input.Price} onChange={handleInput}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company_name</Form.Label>
        <Form.Control type="text" name="Company_Name" value={input.Company_Name}   onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>MNF Date</Form.Label>
        <Form.Control type="text"  name='MNF' value={input.MNF}  onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    
    </div>
        </>
    
    )
}
export default Insert;