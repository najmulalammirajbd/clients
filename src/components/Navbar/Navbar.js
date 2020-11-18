import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../Image & Icon/LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '../Navbar/Navbar.css'
const Navbar = () => {
  const history = useHistory () 
    const RegiNow = () => {
        history.push('/registration');
    }
  return (
    <div>
      <nav className="bg-navbar" style={{ width:'100%' , text:'white' , textAlign:'center'}} class="navbar navbar-expand-lg navbar-light bg-navbar ">
  <a class="navbar-brand" to="/"><img src={logo} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link  " style={{color:'white'}} to="/">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/services">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/ourclasses">Our Classes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/aboutus">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/aboutus">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " style={{color:'white'}} to="/contactus">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Navbar;