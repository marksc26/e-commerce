import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice'
import './styles/Login.css'
const Login = () => {

  const {register, handleSubmit} = useForm()

   const {token, user} = useSelector(state => state.userInfo)


  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = (data) =>{

    dispatch(loginUserThunk(data))
  }

  const handleClickLogOut = () =>{
    dispatch(logOutThunk())
  }

  const handleClickHome = () => {
    navigate('/')
  }



  return (
    <main className='login'>
      {
        token ?(
          <section className='loged'>
            <i className='bx bx-user-circle'></i>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <div className='buttons'>              
              <button onClick={handleClickHome}>Home</button>  
              <button onClick={handleClickLogOut}>Logout</button>
            
            </div>

          </section>
        ) : (
        <form className='login-form' onSubmit={handleSubmit(submit)}>
          <h3>Welcome! Enter your email and password to continue</h3>
          <div className='container-test'>
            <h4>Test data</h4>
            <p><i className='bx bx-envelope'></i>john@gmail.com</p>
            <p><i className='bx bx-lock-alt'></i>john1234</p>
          </div>
        <div className='container-email'>
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")}/>
        </div>
        <div className='container-password'>
          <label htmlFor="">Password</label>
          <input type="password" {...register("password")}/>
        </div>
        <button>Login</button>
        <p className='text-footer'>Don't have an account?<span>Sign up</span></p>
      </form>)
      }

      

    </main>
  )
}

export default Login