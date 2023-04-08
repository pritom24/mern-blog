import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>

      <h1>Login</h1>
      <form action="">
<input type="text" placeholder='user name'/>
<input type="email" placeholder='email'/>
<input type="password" placeholder='password'/>
<button>login</button>
<p>this is an error</p>
<span>do not have any account? <Link to="/register"> Register</Link> </span>
      </form>
    </div>
  )
}

export default Login