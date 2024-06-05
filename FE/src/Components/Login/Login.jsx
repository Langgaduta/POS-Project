// eslint-disable-next-line no-unused-vars
import React from 'react'
import FieldL from '../Common/FieldLogin'

const Login = () => {
  return (
    <div style={{ backgroundColor: '#580865' }}>
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
    <div className="card" style={{width: "24rem", height: "90%", fontFamily: "'Roboto', sans-serif"}}>
      <div className="card-body">
        <p className='mb-4' style={{fontSize: "18px", fontWeight: "400", lineHeight: "20px" }}>Create Your Free Loyverse Account</p>
        <form>
        
          <FieldL label="Email*" type="email" placeholder="Enter Your Email" mb="form-group mb-4"/>
          <FieldL label="Password*" type="password" placeholder="Enter Your Password" mb="form-group mb-4"/>
          <FieldL label="Business name*" type="text" placeholder="Enter Your Business" mb="form-group mb-4"/>
          <FieldL label="Country*" type="text" placeholder="Enter Your Country"  mb="form-group mb-5"/>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label text-body-secondary" style={{ fontWeight: "400", lineHeight: "20px", fontSize: "13px"  }}>I agree to Loyverse <a href="">Terms of Use</a> and have read and acknowledged <a href="">Privacy Policy</a></label>
          </div>

          <button type="button" className="btn mb-1" style={{ width: "100%",color:'white', backgroundColor: '#580865' }}>SIGN UP</button>
          <p className='text-body-secondary d-flex justify-content-center' style={{ fontWeight: "400", lineHeight: "20px", fontSize: "13px" }}>Alredy have an account? <a href="">Sign in</a></p>

        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login