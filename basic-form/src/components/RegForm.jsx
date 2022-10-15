import React ,{useState} from 'react'
import './Form.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";


function RegForm() {
const [regs, setRegs] = useState({
    username:"",
    phone:"",
    email:"",
    password:""
});
const [records, setRecords] = useState([])

const handleForm =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setRegs({...regs,[name]:value})

}
const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord={ ...regs,id:new Date().getTime().toString() }
    console.log(records);
    setRecords([ ...records,newRecord]);
    console.log(records);
    setRegs({username:"",phone:"",email:"",password:""});
    
}

  return (
      <div>
        <div id='body'>
        <form className='card m-4 p-3' action='' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' onChange={handleForm} value={regs.username} name='username' id='username'  autoComplete='off'></input>
            <label htmlFor='name'>Phone No.</label>
            <input type='tel' onChange={handleForm}  maxLength='10' value={regs.phone} name='phone' id='phone'  autoComplete='off'></input>
            <label htmlFor='name'>Email</label>
            <input type='email' onChange={handleForm} value={regs.email} name='email' id='email' autoComplete='off'></input>
            <label htmlFor='name'>Password</label>
            <input type='password' onChange={handleForm}  value={regs.password} name='password' id='password' autoComplete='off'></input>
            <button type='submit' className='btn w-50 m-3'>Submit</button>
        </form>
        </div>
        <div className="dis" id='display'>
        <div className="children" id='parent'>
                        <p>Name</p>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>ID</p>

                    </div>
            {records.map((e)=>{
                return(
                    <div className="child " key={e.id}>
                        <p>{e.username}</p>
                        <p>{e.phone}</p>
                        <p>{e.email}</p>
                        <p>{e.id}</p>

                    </div>
                )
            })}
            </div>
            
            
        </div>
        
       
  )
}

export default RegForm