import React from 'react';
import './About.css'
import aboutimg from '../../wells-chan-H-vAxuWxmi8-unsplash.jpg'
const About = () => {
    return (
        <div className="about-bg">
            <div style={{marginTop:'90px'}} className="container">
                <div className="row">
                 <div className="col-md-6 d-flex ">
                  <img style={{width:'471px' , marginRight:'92px' , borderRight:'9px solid white'}} src={aboutimg}alt=""/>
                 </div>
                 <div className="col-md-6 ">
                 <h1 style={{marginTop:'132px' , color:'gray'}}>ABOUT US</h1> <br/>
                 <h2 style={{color:'#fcd842'}}> WE ARE HERE TO DREAM!</h2> <br/>
                 <h2 >OUR TEAM IS HERE SURVE YOU</h2> <br/>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat ipsum harum autem? Est, adipisci. Ipsum sunt illo reprehenderit modi aliquid tempore, reiciendis quibusdam veniam non exercitationem porro? Est, delectus!</p>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default About;