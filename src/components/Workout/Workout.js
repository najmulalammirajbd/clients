import React from 'react';
import './Worout.css'
import Icon1 from '../../Image & Icon/Group 80.png'
import Icon2 from '../../Image & Icon/Group 81.png'
import Icon3 from '../../Image & Icon/Group 82.png'
const Workout = () => {
    return (
        <div>
            <div style={{marginTop:'10px' , textAlign:'center'}} className="container ">
                <div className="row ">
                    <div style={{height:'369px' ,  borderRight:'9px solid white' }} className="col-md-4 workout-bg1">
                     <img style={{marginTop:'79px'}} src={Icon1} alt=""/>
                     <h2   style={{marginTop:'10px'}} className="text-white">PROGRESSION</h2>
                     <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit vero illo qui adipisci excepturi amet, sapiente ipsa tempore ad alias molestias veniam consectetur soluta delectus odit veritatis quisquam. Velit!</p>
                    </div>
                    <div style={{height:'369px' ,  borderRight:'9px solid white'}} className="col-md-4 workout-bg2">
                    <img style={{marginTop:'79px'}} src={Icon2} alt=""/>
                    <h2 style={{color:'#fcd842', marginTop:'10px'}}>WORKOUT</h2>
                    <p style={{color:'#fcd842'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quidem iste veritatis deserunt a quis, blanditiis atque est reprehenderit culpa illum sequi autem numquam, labore cum eos ea necessitatibus pariatur!</p>
                    </div>
                    <div style={{height:'369px' ,  borderRight:'9px solid white'}} className="col-md-4 workout-bg3">
                    <img style={{marginTop:'79px'}} src={Icon3} alt=""/>
                    <h2 style={{color:'white', marginTop:'10px'}}>NUTRITION</h2>
                    <p style={{color:'white'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quidem iste veritatis deserunt a quis, blanditiis atque est reprehenderit culpa illum sequi autem numquam, labore cum eos ea necessitatibus pariatur!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workout;