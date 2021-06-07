import React,{useState} from 'react'
import { MemberShipForm } from './MemberShipForm'
import { Link } from "react-scroll";

export default function Membership(props) {
    
    const [values,setValues] = useState({
        terms : false,

    })

    return (
        <>
            <section id="membership" className="bg-white">
                <div className="row  bg-warning">
                    <div className="space-20"></div>
                    <div className="col col-12 text-center h2 underline-yellow ">
                        MEMBERSHIP
                    </div>
                    <div className="space-20"></div>
                </div>
                <div className=" container">
                    <div className="row">
                        <div className="col col-12 text-center h3 ">
                        <br/><br/> "Joining ASFE is the most important connection <br/> a current or future loss prevention engineer can make"
                        </div>
                    </div>
                    <div className="space-50"></div>
                    <div className="row">
                        <div className="col col-12 text-center">
                            <Link to="membership_form" smooth={true} className="smooth-goto"><button className="btn btn-dark m-2">Join now</button></Link>
                            <a href="ASFE_Form.pdf" target="_blank" download><button className="btn btn-dark m-2"> Join offline</button></a>
                            <button className="btn btn-danger m-2"> Pay here</button>
                        </div>
                    </div>
                
                    <div className="space-50"></div>
                    <div className="space-50"></div>
                    <div className="alert alert-secondary shadow">
                        <div className="row">
                            <div className="col col-12  text-center text-md-left f-3 font-weight-bold underline-dark " >
                                ELIGIBILITY 
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="row">
                            <div className="col col-12 ">
                                Student/graduates/post graduates/PhDs of Division of safety and fire engineering, School of Engineering, CUSAT
                            </div>
                        </div>

                    </div>
                    <div className="space-20"></div>

                    <div className="alert alert-secondary shadow">
                        <div className="row ">
                            <div className="col col-12 text-center text-md-left f-3 font-weight-bold underline-dark">
                                MEMBERSHIP BENEFITS 
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="row">
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Life Members are entitled for voting powers for the election of Governing Body.
                            </div>
                            <div className="space-20"></div>
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Entitled to receive all publications (e-version)/Technical papers released by ASFE. 
                            </div>
                            <div className="space-20"></div>
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Opportunity to participate in technical events e.g. Seminars, Conventions, Workshops etc. organized by ASFE.
                            </div>
                            <div className="space-20"></div>
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Subsidies in registration fee for ASFE sponsored events.
                            </div>
                            <div className="space-20"></div>
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Can participate/contest in election for governing body.
                            </div>
                            <div className="space-20"></div>
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Can be elected as a member of Technical committees formed under ASFE based experiences.
                            </div>
                            <div className="space-20"></div>
                            <div className="col col-12  ">
                                <i className="fas fa-star"></i>
                                Career guidance and assistance. 
                            </div>
                        </div>

                    </div>
                    
                    <div className="space-20"></div>

                    <div className="alert alert-secondary shadow">
                        <div className="row">
                            <div className="col col-12 text-center text-md-left f-3 font-weight-bold underline-dark">
                                MEMBERSHIP CHARGES 
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="row">
                            <div className="col col-12 ">
                                Onetime fee of ₹3000 for Life membership 
                            </div>
                        </div>

                    </div>
                    
                    <div className="space-20"></div>
                    <div className="alert alert-secondary shadow">
                        <div className="row">
                            <div className="col col-12 text-center text-md-left f-3 font-weight-bold underline-dark">
                                APPLY FOR MEMBERSHIP 
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="row">
                            <div className="col col-12 ">
                                Pay the fee online and fill the <Link className="pointer " spy={true} smooth={true} to="membership_form">online membership form.</Link> 
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="row">
                            <div className="col col-12 ">
                                or 
                            </div>
                        </div>
                        <div className="space-20"></div>
                        <div className="row">
                            <div className="col col-12 ">
                                Pay the fee online and send filled  <a target="_blank" href="ASFE_Form.pdf" >application form </a> to the below address :
                                <br/><br/>
                                <div className="alert-secondary alert">
                                    ASFE, Division of Safety and Fire Engineering, School of Engineering, <br/>
                                Cochin University of Science And Technology,Thrikkakara, <br/> Kalamassery, Kerala  - 682022 
                                </div>
                                
                            </div>
                        </div>

                    </div> 
                    <div className="space-20"></div>
                    
                
                    <div className="row">
                        <div className="col col-12 " id="membership_form">
                            <div className="col col-12 bg-light shadow">
                                <div className="row">
                                    <div className="col col-12">
                                        <div className="space-20"></div>
                                        <div className="col col-12 text-center  f-3 font-weight-bold underline-dark">
                                            Online membership form
                                        </div>
                                        <div className="space-20"></div>
                                    </div>
                                </div>
                                <MemberShipForm/>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="space-50"></div>
                    <div className="space-50"></div>
                </div>
            </section>
                        
        </>
    )
}



