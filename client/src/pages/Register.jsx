import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='auth'>

      <h1>Register</h1>
      <form action="">
<input type="text" placeholder='user name'/>
<input type="email" placeholder='email'/>
<input type="password" placeholder='password'/>
<button>Register</button>
<p>this is an error</p>
<span>do you have any account? <Link to="/login"> Login</Link> </span>
      </form>
    </div>
  )
}

export default Register