// eslint-disable-next-line no-unused-vars
import React from 'react'
import FieldL from '../../Common/FieldLogin'
import Logo from '../../Common/Logo'

const ResetPass = () => {
  return (
    <div style={{ backgroundColor: '#580865' }}>
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
    <div className="card" style={{width: "24rem", height: "50%", fontFamily: "'Roboto', sans-serif"}}>
      <div className="card-body">
        <Logo/>
        <p className='mb-3 mt-2' style={{fontSize: "18px", fontWeight: "400", lineHeight: "20px" }}>Reset password</p>
        <p className="form-check-label mb-3" style={{ fontWeight: "400", lineHeight: "20px", fontSize: "12px" }}>Enter your email to receive instructions to reset your password</p>
        <form>

        <FieldL label="Email*" type="email" placeholder="Enter Your Email" mb="form-group mb-4"/>

        <button type="button" className="btn mb-4" style={{ width: "100%", color:'white', fontWeight: "600", backgroundColor: '#580865' }}>CONTINUE</button>

        <p className='text-body-secondary' style={{ fontWeight: "400", lineHeight: "20px", fontSize: "12px" }}><a href="">Back to Sign In form</a></p>

        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ResetPass