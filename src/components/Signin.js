import React from 'react';
import image4 from "../Group .png";
import "./Signin.css"

const Signin = () => {
  const handleclick =()=>{
    const home =document.querySelector(".homeall");
    home.classList.remove("blur");
    home.classList.remove("fixed")
    const sign =document.querySelector(".sign");
    sign.classList.add("display");
    const login =document.querySelector(".login");
    login.classList.add("display");;
  } 
  const handleloginin = () =>{
      const home =document.querySelector(".homeall");
        const sign = document.querySelector(".sign");
        sign.classList.remove("display");
        const login = document.querySelector(".login");
        login.classList.add("display");
        home.classList.add("fixed")
    }
  return (
    <div className='login display'>
<i class="fas fa-cut" style={{
  "display":"flex",
  "justifyContent":"flex-end",
  "cursor":"pointer"
}} onClick={handleclick}></i>
        <p style={
          {
            "fontSize":"12px",
            "textAlign":"center",
            "color": "#008A45",
            "backgroundColor":"#EFFFF4"
          }
        }>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        <div className="signup">
          <div style={{
            "display":"flex",
            "justifyContent":"space-between ",
          }}>
            <h3 className='ca'>Sign In</h3>
             <p onClick={handleloginin} style={
              {
                "marginRight":"13px",
                "fontSize":"13px",
                "cursor":"pointer"
              }
             }> Don’t have an account yet?<span style={{
              "color":"blue",
             }}>Create new for free!</span> </p>
          </div>
          <div
          style={{
            "display":"flex"
          }}>
        <div className="left">
            <input type="text" placeholder='email' className='it1' />
            <input type="text" placeholder='password'  className='it1' />
            <button className='btn-in'>Sign In</button>
            <button className='btn-in1'>Sign up with Facebook</button>
            <button className='btn-in2'>Sign up with Google</button>
            <button className='btn-in2'>Forget Password?</button>
        </div>
        <div className="right">
        <img src={image4} alt="" />
        </div>
          </div>
        </div>
    </div>
  )
}

export default Signin
