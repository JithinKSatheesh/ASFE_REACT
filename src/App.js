import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css'

// import './Assets/bootstrap/css/bootstrap.min.css';
import About from './Components/About';
import Activities from './Components/Activities';
import Admin from './Components/Admin';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Membership from './Components/Membership';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/' component={Mainwebsite} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

const Mainwebsite = ()=>{
  return(
    <>
    <Navbar />
    <Home id='home' />
    <About id='about'/>
    <Services id='services'/>
    <Activities id='activities'/>
    <Membership id='membership'/>
    <Contact id='contact'/>
    </>
  )
}

export default App;
