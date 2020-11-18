import React from 'react';
import './Traning.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png'
import img2 from '../../Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg'
const Traning = () => {
    return (
        <div>
            <h2 style={{textAlign:'center' , marginTop:'40px', marginBottom:'40px'}}>TRANING <span style={{color:'#fcd842'}}>PROGRAMS</span></h2>
            <div style={{marginTop:'50px'}} className="container">
                <div className="row">
                    <div className="col-md-6">
                     <img style={{width:'586px' , height:'391px' , borderRight:'19px solid white'}} src={img1} alt=""/>
                     <button style={{margin:'10px 10px',  padding:'20px 56px' , border:'none' , background:'#fcd842' }}> <FontAwesomeIcon icon={faSignInAlt} /> YOGA TRANING SESATION</button>
                    </div>
                    <div className="col-md-6">
                    <img style={{width:'586px'}} src={img2} alt=""/>
                    <button style={{margin:'10px 10px',  padding:'20px 56px' , border:'none' , background:'#fcd842' }}> <FontAwesomeIcon icon={faSignInAlt} /> CORDIO TRANING SESATION</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Traning;