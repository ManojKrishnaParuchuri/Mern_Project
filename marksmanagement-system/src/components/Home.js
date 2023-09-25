import React from 'react';
import './Home.css';

import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
      <>
  <body  className='homebody'>
  {/* <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1618473962497-68e8d4e0680e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjB0cmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80")` ,
      
    }}> */}
    
    <div className="main">
        <div className="navbar">
            <div className="icon">
            </div>

            <div className="menu">
                <ul>
                    <li><NavLink href="/signup">HOME</NavLink></li>
                    <li><NavLink to={"/about"}>ABOUT</NavLink></li>
                    
                    <li><NavLink to={"/contact"}>CONTACT</NavLink></li>

                    <li><NavLink to={"/login"}>LOGIN</NavLink></li>
                    


                </ul>
            </div>

            <div className="search">
                <input className="srch" type="search" name="" placeholder="Type To text"/>
                <NavLink href="#"> <button className="btn1">Search</button></NavLink>
            </div>

        </div> 
        <div className="content">
            <h1>Marks<br></br> <span>Management</span><br></br> System</h1>
            <p className="par"> <br></br>A webapplication developed for students to verify cgpa and attendance <br></br>It is useful for both the faculty and students for refering the grade records</p>

                <button className="cn"><NavLink to="https://t.me/ManojKrishna_21">JOIN US</NavLink></button>
                <button className="cn"><NavLink to="/register">Register</NavLink></button>
        
                    
    </div>
    </div>
    
    {/* </div> */}
    </body> 
      </>
    
  )
}
