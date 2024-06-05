// eslint-disable-next-line no-unused-vars
import React from 'react'
import FieldL from '../../Common/FieldLogin'
import Logo from '../../Common/Logo'

const Login = () => {
  return (
    <div style={{ backgroundColor: '#580865' }}>
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
    <div className="card" style={{width: "24rem", height: "63%", fontFamily: "'Roboto', sans-serif"}}>
      <div className="card-body">
        <Logo/>
        <p className='mb-3 mt-2' style={{fontSize: "18px", fontWeight: "400", lineHeight: "20px" }}>Sign in to your Loyverse account</p>
        <form>
        
          <FieldL label="Email*" type="email" placeholder="Enter Your Email" mb="form-group mb-4"/>
          <FieldL label="Password*" type="password" placeholder="Enter Your Password" mb="form-group mb-4"/>

          <div className='d-flex justify-content-between mb-3'>
            <div className="pt-1 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" style={{ fontWeight: "400", lineHeight: "20px", fontSize: "13px" }}>Remember me</label>
            </div>
            <button type="button" className="btn" style={{ color:'white', fontWeight: "500", backgroundColor: '#580865'}}>SIGN IN</button>
          </div>

          <p className='text-body-secondary' style={{ fontWeight: "400", lineHeight: "20px", fontSize: "12px" }}><a href="">Forgot password?</a></p>
          <p className='text-body-secondary' style={{ fontWeight: "400", lineHeight: "20px", fontSize: "12px" }}><a href="">New to Loyverse?</a></p>

        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login