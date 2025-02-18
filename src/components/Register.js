import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../store/slices/authSlice'
import '../styles/styles-generic.scss'

const Register = () => {
    const dispatch = useDispatch();
    const [form, setForm] =useState({
        email: '',
        password: '',
        name: '',
    });

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(form))
    }

  return (
    <div className='container'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input 
                type='text' 
                placeholder='name' 
                onChange={(e) => setForm({ ...form, name: e.target.value})}
            />
            <input 
                type='email' 
                placeholder='email' 
                onChange={(e) => setForm({ ...form, email: e.target.value})}
            />
            <input 
                type='password' 
                placeholder='password' 
                onChange={(e) => setForm({ ...form, password: e.target.value})}
            /> 
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register