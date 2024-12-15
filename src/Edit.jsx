import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
const Edit=()=>{
const [mydata, setMydata]=useState({});
const {id} =useParams();
const loadData=()=>{
    let api=`http://localhost:3000/Medical/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>
{ 
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
      console.log(mydata);
}


const handleSubmit=()=>{
    let api=`http://localhost:3000/Medical/${id}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesflly updated!!!");
    })
}

   

    return(
        <>
        <div style={{border:"1px solid black",marginLeft:"20px",marginTop:"20px", width:"50%",backgroundColor:"pink"}}>
        <h1> Update your Record : {id} </h1>


         Edit Name  : <input type="text" name="Tablet_Name" value={mydata.Name} onChange={handleInput} style={{paddingLeft:"50px"}}/>
         <br/>
         <br />
         Edit  Price  : <input type="text" name="Price"  value={mydata.Price}
         onChange={handleInput}style={{paddingLeft:"60px"}} />
         <br/>
         <br />
         Edit Author Name  : <input type="text" name="Company_Name" value={mydata.Company_Name}
         onChange={handleInput} />
         <br/>
         <br />
         Edit Publish Year   : <input type="text" name="MNF"  value={mydata.MNF}
         onChange={handleInput}style={{paddingLeft:"10px"}} />
         <br/>
         <br />

        
         <button style={{marginLeft:"20px",padding:"5px",}} onClick={handleSubmit}>  Update save!</button>
         <br /><br />
         </div>
        </>

    )
}

export default Edit;