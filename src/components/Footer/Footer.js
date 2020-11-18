import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookSquare,faInstagramSquare,faTwitterSquare,faWhatsappSquare,faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import logo from '../../Image & Icon/LOGO.png'
const Footer = () => {
    return (
        <div className="div">
            <div style={{background:'#171426' , height:'250px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-2">
                     <img src={logo} alt=""/>
                    </div>
                    <div style={{marginTop:'35px'}} className="col-md-2">
                     <h6 className="text-white">Need Helps?</h6>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Help Center</a><br/>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Email Support</a><br/>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Live Chat</a><br/>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Gift Critificitas</a><br/>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Send Us Feedback</a><br/>
                    </div>
                    <div style={{marginTop:'35px'}} className="col-md-2">
                    <h6 className="text-white">Digital Resores</h6>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Articales</a><br/>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">E-book</a><br/>
                    </div>
                    <div style={{marginTop:'35px'}} className="col-md-2">
                    <h6 className="text-white">Connect with Us</h6>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to=""><FontAwesomeIcon style={{color:'white'}} icon={faFacebookSquare}/> <FontAwesomeIcon style={{color:'white'}} icon={faYoutubeSquare} /> <FontAwesomeIcon style={{color:'white'}} icon={faInstagramSquare} /> <FontAwesomeIcon style={{color:'white'}} icon={faTwitterSquare} /> <FontAwesomeIcon style={{color:'white'}} icon={faWhatsappSquare} /></a><br/>
                     <a style={{textDecoration:'none' , marginTop:'8px'}} className='text-white' to="">Forum</a><br/>
                    </div>
                    <div style={{marginTop:'35px'}} className="col-md-2">
                    <h6 className="text-white">Join Our Newsletter</h6>
                     <small style={{color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nulla, exercitationem provident sapiente illo beatae?</small>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
            </div>
        </div>
        <div style={{background:'#171426'}}>
        <small style={{marginTop:'50px' , color:'white'}} >© Programming-hero.com  {(new Date().getFullYear())} </small>
        </div>
        </div>
        
    );
};

export default Footer;