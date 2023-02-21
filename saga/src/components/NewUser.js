import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { act_create_user } from '../redux/actions'


export default function NewUser() {
    const navigate = useNavigate()
    const [email,setEmail]= useState();
    const [password,setPassword] = useState();
    const [fullname,setFullName] = useState();
    const dispatch = useDispatch();

    const handleCreate =()=>{
        dispatch(act_create_user({email: email,password: password,fullname: fullname}));
        navigate('/')
    }
  return (
    <div>
      <h2>Ceate New User</h2>
      <label htmlFor='email'>Email</label>
      <input type="text" id='email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor='password'>Password</label>
      <input type="password" id='email' name='email'  onChange={(e)=>setPassword(e.target.value)}/>
      <label htmlFor='email'>Full Name</label>
      <input type="text" id='fullname' name='fullname'  onChange={(e)=>setFullName(e.target.value)}/>
      <button onClick={handleCreate}>Create</button>
      <button onClick={()=>navigate("/")}>Back List User</button>
    </div>
  )
}
