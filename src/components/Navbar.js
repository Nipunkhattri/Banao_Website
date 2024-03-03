import React from 'react'
// import {Link} from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdLegendToggle } from "react-icons/md";

const Navbar = () => {

  const handleclick = () =>{
    const home =document.querySelector(".homeall");
    home.classList.add("blur");
    const sign =document.querySelector(".sign");
    sign.classList.remove("display");
    home.classList.add("fixed")
    // home.classList.add("overflow")

  }
  const classTogglenav = () =>{
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  return (

    <div>
      <>
      <div class="nav Navbar">
      <div class="Navbar__Link Navbar__Link-brand">
      <h2 className='heading'><span style={{color:"#27a365"}}>ATG</span>.WORLD</h2>
    </div>
    <div onClick={classTogglenav} class="Navbar__Link Navbar__Link-toggle">
    <MdLegendToggle style={{fontSize:"24px"}}/>
    </div>

  <div className="text">
        <CiSearch className='search'/>
            <input type="text" placeholder='Search for your favorite groups in ATG'/>
        </div>
  <nav class="Navbar__Items Navbar__Items--right " style={{
    "marginLeft":"0px"
  }}>
  <div className="account " >
          <p onClick={handleclick} style={{
            "cursor":"pointer",
            fontSize:"18px"
          }}>Create account.<span>It's free</span></p>
        </div>
  </nav>
</div>
      </>
    </div>
  )
}

export default Navbar
