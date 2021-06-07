import React,{useEffect, useState} from 'react'
import logo from '../Assets/img/logo_letter.png'
import { AdminActivities } from './AdminActivities';
import Adminmembership from './AdminMembership'
import { AdminMessage } from './AdminMessage'

export default function Admin(props) {

    const secretKey = 'asfe.org.in'
    const [pass,setPass] = useState('')

    const [screen,setScreen] = useState(1)


    return (
        <>  
            <Navbar setScreen={setScreen} />

                {
                    pass !== secretKey &&
                        <div className="container">
                            <div className="space-100"></div>
                            <div className="h3">
                                Enter PIN
                            </div>
                            <div className="form-group">
                                <input 
                                    className='form-control'
                                    value={pass}
                                    onChange={(e)=>{setPass(e.target.value)}}
                                    type="text" 
                                    placeholder='PIN'  />
                            </div>
                        </div>
                }


                {
                ( pass === secretKey ) && <>
                        <div className="space-100"></div>
                        { screen=== 1 && <AdminMessage/>}
                        { screen=== 2 && <Adminmembership/>}
                        { screen=== 3 && <AdminActivities/>}
                </>
                }
            
            
        </>
    )
}


const Navbar = ({setScreen})=>{

    const [show,setShow] = useState(false)

    return(
                
    <section>
        
    <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
       <a className="navbar-brand text-warning smooth-goto" href="#home" >
           <img src={logo} alt=""  width="170px" />
       </a>
       <button className="navbar-toggler" onClick={()=>setShow(!show)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
        </button>
        
		<div className={`collapse navbar-collapse ${show && 'show'} `} id="navbarSupportedContent">
		     
             <ul className="navbar-nav ml-auto font-weight-light">
               <li onClick={()=>{setScreen(1)}} className="nav-item p-2 text-white pointer">
                    Message
               </li>
               <li onClick={()=>{setScreen(3)}} className="nav-item  p-2 text-white pointer ">
                    Activities
                 </li>
               <li  onClick={()=>{setScreen(2)}} className="nav-item  p-2 text-white pointer ">
                    Membership
               </li>                     
             </ul>
         
       </div>
       
   </nav>
   </section>
    )
}
