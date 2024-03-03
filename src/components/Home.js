import React from "react";
import "./Home.css";
import image1 from "../Rectangle 5.png"
import image2 from "../Rectangle 5 (1).png"
import image3 from "../Rectangle 5 (2).png"
import image5 from "../Rectangle 3 (2).png"
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import { BsThreeDots } from "react-icons/bs";

const Home = () => {

  const classToggle = () =>{
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  // document.querySelector('.Navbar__Link-toggle')
  //   .addEventListener('click', classToggle);
  return (
    <>
    <div className="homeall">
      <div className="hme">
        <div className="inputhome">
          <h1>Computer Enginnering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      {/* <div className="navbarhme">
        <div className="first">
          <ul>
            <li>All Posts(32)</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
        </div>
        <div className="second">
          <button className="btn1">Write a Post</button>
          <button className="btn2">Join Group</button>
        </div>
      </div> */}
      <div class="Navbar1">
      <div class="Navbar__Link Navbar__Link-brand">
      All Posts(32)
    </div>
    {/* <div onClick={classToggle} class="Navbar__Link Navbar__Link-toggle">
      <i class="fas fa-bars"></i>
    </div> */}
  <nav class="Navbar__Items">
    <div class="Navbar__Link">
    Article
    </div>
    <div class="Navbar__Link">
    Event
    </div>
    <div class="Navbar__Link">
    Education
    </div>
  </nav>
  <nav class="Navbar__Items Navbar__Items--right">
  <button className="btn1">Write a Post</button>
  <button className="btn2">Join Group</button>
  </nav>
</div>

      {/* <div className="navbarhme">
        <div className="first">
          <p>All Posts(32)</p>
        </div>
        <div className="second">
          <button className="btn1">Write a Post</button>
        </div>
      </div> */}
      <div className="card-all">
        <div className="card-left">
          <div class="card">
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">✍️ Article</h5>
              <div style={{
                "display":"flex",
                "justifyContent":"space-between"
              }}>
              <p class="card-text">
              What if famous brands had regular fonts? Meet RegulaBrands!
              </p>
              <BsThreeDots style={{
                fontSize:"25px"
              }}/>
              </div>
              <p class="card-text1">
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
              </p>
              <div className="card-name">
                <div style={{
                  "display":"flex"
                }}>
                <img src={image5} style={{"height":"40px","width":"40px","marginTop":"11px",marginRight:"5px"}} alt="" />
                <p>Sarthak Kamra</p>
                </div>
                <p>1.4k views</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">🔬️ Education</h5>
              <div style={{
                "display":"flex",
                "justifyContent":"space-between"
              }}>
              <p class="card-text">
              Tax Benefits for Investment under National Pension Scheme launched by Government
              </p>
              <BsThreeDots style={{
                fontSize:"25px"
              }}/>
              </div>
              <p class="card-text1">
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
              </p>

              <div className="card-name">
              <div style={{
                  "display":"flex"
                }}>
                <img src={image5} style={{"height":"30px","width":"30px","marginTop":"11px"}} alt="" />
                <p>Sarthak Kamra</p>
                </div>
                <p>1.4k views</p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={image3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">🗓️ Meetup</h5>
              <div style={{
                "display":"flex",
                "justifyContent":"space-between"
              }}>
              <p class="card-text1">
              Finance & Investment Elite Social Mixer @Lujiazui
              </p>
              <BsThreeDots style={{
                fontSize:"25px"
              }}/>

              </div>
              <p class="card-text">
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
              </p>
              <button style={{
                "width":"100%",
                "border":"none",
                "height":"40px",
              }}><span style={{
                "color":"red"
              }}>Visite website</span></button>
              <div className="card-name">
              <div style={{
                  "display":"flex"
                }}>
                <img src={image5} style={{"height":"30px","width":"30px","marginTop":"11px"}} alt="" />
                <p>Sarthak Kamra</p>
                </div>
                <p>1.4k views</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">💼️ Job</h5>
              <div style={{
                "display":"flex",
                "justifyContent":"space-between"
              }}>
              <p class="card-text">
              Software Developer
              </p>
              <BsThreeDots style={{
                fontSize:"25px"
              }}/>
              </div>
              <p class="card-text1">
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
              </p>
              <button style={{
                "width":"100%",
                "border":"none",
                "height":"40px",
              }}><span style={{
                "color":"red"
              }}>Apply on Timesjobs</span></button>
              <div className="card-name">
              <div style={{
                  "display":"flex"
                }}>
                <img src={image5} style={{"height":"30px","width":"30px","marginTop":"11px"}} alt="" />
                <p>Sarthak Kamra</p>
                </div>
                <p>1.4k views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-right">
          <input className="inputr" placeholder="Noida India" type="text" name="" id="" />
          <p style={{
            "fontSize":"12px"
          }}>Your location will help us serve better and extend a personalised experience.</p>
        </div>
      </div>
    </div>
      <Signup/>
      <Signin/>
    </>
  );
};

export default Home;
