import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import logo from '../Assets/img/logo.png'

export default function Home(props) {
    

    return (
        <>
        <section id="home">
            <div className="hero bg-dark">
                <div className="space-100"></div>
                <div className="space-50"></div>
            
                <div className="container">
                    <div className="text-center">
                        <Zoom>
                            <img className="logo-thumb" src={logo} alt="" />
                        </Zoom>
                    </div>
                    <Fade top>
                    <h1 className="h2 text-white text-center"> <br/>   TOWARDS A SAFER WORLD</h1>
                    </Fade>
                </div>

            </div>
        </section>
            
        </>
    )
}
