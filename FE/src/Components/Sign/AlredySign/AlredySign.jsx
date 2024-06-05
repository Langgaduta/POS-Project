// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../../Common/Logo'

const AlredySign = () => {
  return (
    <div style={{ backgroundColor: '#580865' }}>
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
    <div className="card" style={{width: "24rem", height: "35%", fontFamily: "'Roboto', sans-serif"}}>
      <div className="card-body">
        <Logo/>
        <p className='mb-3 mt-2' style={{fontSize: "18px", fontWeight: "400", lineHeight: "20px" }}>You are already signed in</p>

        <button type="button" className="btn mb-4" style={{ width: "100%", color:'white', fontWeight: "600", backgroundColor: '#580865' }}>CONTINUE</button>

        <p className='text-body-secondary d-flex justify-content-center' style={{ fontWeight: "400", lineHeight: "20px", fontSize: "14px" }}><a href="">Create account</a></p>

      </div>
    </div>
    </div>
    </div>
  )
}

export default AlredySign