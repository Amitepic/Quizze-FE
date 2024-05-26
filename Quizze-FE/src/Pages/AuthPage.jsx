import React, { useState } from 'react'
import Login from '../Components/auth/Login';
import SignUp from '../Components/auth/SignUp';
import '../style/auth.css';




const Auth = () => {

 
  const [wp, setWp] = useState(true);

  const showSignup = ()=>{
    setWp(true)
  }

  const showLogin = ()=>{
    setWp(false);
  }

  

  return (
    <>
      <div className='authbox'>
            <h1 className='title'>QUIZZIE</h1>
            <div className='authtabs'>
                <div onClick={showSignup} className={`authbutton ${wp&&"selected"}`}>
                  Sign Up
                </div>
                <div onClick={showLogin} className={`authbutton ${!wp&&"selected"}`}>
                  Log In
                </div>
            </div>
            <div className='authcontainer'>
                {
                  wp ? <SignUp /> : <Login />
                }
            </div>
      </div>
    </>
  )
}

export default Auth