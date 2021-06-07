import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import logo from '../Assets/img/logo_letter.png'

export default function Navbar(props) {
    
    const [show,setShow] = useState(false)

    return (
        <>
            
    <section>
        
     <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		  <Link  onClick={()=>{scroll.scrollToTop()}} className="navbar-brand text-warning pointer "  >
            <img src={logo} alt=""  width="170px" />
        </Link>
		<button className="navbar-toggler" onClick={()=>setShow(!show)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
        </button>
        
		<div className={`collapse navbar-collapse ${show && 'show'} `} id="navbarSupportedContent">
		    
			  <ul className="navbar-nav ml-auto font-weight-light">
				<li className="nav-item ">
				  <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            className="nav-link pointer" 
            to="home">HOME</Link>
        </li>
        <li className="nav-item ">
            <Link 
              activeClass="active"
              spy={true}
              smooth={true}
              className="nav-link pointer" 
              to="about">ABOUT</Link>
        </li>
        <li className="nav-item ">
				  <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            className="nav-link pointer" 
            to="services">SERVICES</Link>
        </li>
        <li className="nav-item ">
            <Link
              activeClass="active" 
              spy={true}
              smooth={true}
              className="nav-link pointer" 
              to="activities">ACTIVITIES</Link>
        </li>
                
        <li className="nav-item ">
				  <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            className="nav-link pointer" 
            to="membership">MEMBERSHIP</Link>
				</li>
               
				<li className="nav-item ">
				  <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            className="nav-link pointer" 
            to="contact">CONTACT</Link>
				</li>
			  </ul>
		  
        </div>
        
    </nav>
    </section>
        </>
    )
}
