import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { signUp } from '../controllers/register/register.functions'
import { auth } from '../config/firebase'

function Register() {

  const { email, setEmail, password, setPassword } = useContext(Context)
  
  const register = () => signUp(email, password)
  console.log(auth?.currentUser?.email)
  return (
    <>
      <form 
        id='register-form'
        onSubmit={(e) => {e.preventDefault(); register()}}
       >
        <h2>Sign up</h2>
        <input 
          type="email" 
          placeholder='email . . .'
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <br />
        <br />
        <input 
          type="password" 
          placeholder='password . . .'
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        <br />
        <br />
        <button
          type='submit'
        >
          Register
        </button>
        <div id='register-message-container'></div>
      </form>
    </>
  )
}

export default Register