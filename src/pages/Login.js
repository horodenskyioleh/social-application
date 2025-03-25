import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/login.scss'
import '../styles/styles-generic.scss';
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error)
  const user = useSelector( (state) => state.auth.user)
  const [form, setForm] = useState( {
    email: '',
    password: ''
  });


   useEffect( () => {
      if(user) {
        //navigate('/profile') // navigate on a profile after entering in system
        navigate('/news')
      }
    },[user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  }

  return (
    <div className="container">
        <h2>Login: </h2>
        {
          error && <p className='text-error' style={{color: 'red'}}>{error}</p>
        }
        <form onSubmit={handleLogin}>
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
            <button type='submit'>Enter</button>
           <Link to='/register'>Don't you have an account?</Link>
            
        </form>
        

    </div>
  )
}

export default Login