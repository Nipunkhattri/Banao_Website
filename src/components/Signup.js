import React from 'react'
import "./Signup.css"
import image4 from "../Group .png"
// import { useNavigate } from 'react-router-dom'

const Signup = () => {
  // const navigate = useNavigate();
  const handleclick =()=>{
    const home =document.querySelector(".homeall");
    home.classList.remove("blur");
    home.classList.remove("fixed")
    const sign =document.querySelector(".sign");
    sign.classList.add("display");
  } 
  const handlesignin =()=>{
    const home =document.querySelector(".homeall");
    const sign = document.querySelector(".sign");
    sign.classList.add("display");
    const login = document.querySelector(".login");
    login.classList.remove("display");
    home.classList.add("fixed");
  }
  return (
    <div className='sign display'>
<i class="fas fa-cut" style={{
  "display":"flex",
  "justifyContent":"flex-end",
  "cursor":"pointer"
}} onClick={handleclick}></i>
        <p className='pass'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        <div className="signup">
          <div className='abc'>
            <h3 className='ca'>Create Account</h3>
             <p onClick={handlesignin} style={
              {
                "marginRight":"13px",
                "fontSize":"13px"
              }
             }> Already have an account?<span style={{
              "color":"blue",
             }}>Sign In</span> </p>
          </div>
          <div
          style={{
            "display":"flex"
          }}>
        <div className="left">
            <div className='itall'>
            <input type="text" placeholder='First Name' className='it'/>
            <input type="text" placeholder='Last Name' className='it'/>
            </div>
            <input type="text" placeholder='email' className='it1' />
            <input type="text" placeholder='password'  className='it1' />
            <input type="text" placeholder='confirm password' className='it1' />
            <button className='btn-in'>Create Account</button>
            <button className='btn-in1'>Sign up with Facebook</button>
            <button className='btn-in2'>Sign up with Google</button>
        </div>
        <div className="right">
        <img src={image4} alt="" />
        </div>
          </div>
        </div>
    </div>
  )
}

export default Signup
