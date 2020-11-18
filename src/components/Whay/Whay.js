import React from 'react';
import img1 from '../../Image & Icon/Group 87.png'
import img2 from '../../Image & Icon/Group 88.png'
import img3 from '../../Image & Icon/gift-2.png'
const Whay = () => {
    return (
        <div style={{marginTop:'25px' , marginBottom:'100px'}}>
            <h2 style={{textAlign:'center' , marginTop:'40px', marginBottom:'40px'}}><span style={{color:'#fcd842'}}>WHY</span> CHOOSE US</h2>
            <div className="container">
                <div className="row">
                    <div style={{height:'400px' , boxShadow:'5px 5px 10px lightgray'}} className="col-md-4">
                    <img style={{width:'80px' , marginTop:'70px'}} src={img1} alt=""/>
                    <h3 style={{marginTop:'50px'}}>FREE FITNESS TRAINING</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consectetur distinctio recusandae commodi minus eum expedita eaque quidem quos consequatur.</p>
                    </div>
                    <div style={{height:'400px', boxShadow:'5px 5px 10px lightgray' , border:'1px solid #fcd842'}} className="col-md-4">
                    <img style={{width:'80px' , marginTop:'70px'}} src={img2} alt=""/>
                    <h4 style={{marginTop:'50px'}}>TONS OF CRDIO & STRENGTH</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consectetur distinctio recusandae commodi minus eum expedita eaque quidem quos consequatur.</p>
                    </div>
                    <div style={{height:'400px', boxShadow:'5px 5px 10px lightgray'}} className="col-md-4">
                    <img style={{width:'80px' , marginTop:'70px'}} src={img3} alt=""/>
                    <h5 style={{marginTop:'50px'}}>NO COMMITMENT MEMBERSHIP</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consectetur distinctio recusandae commodi minus eum expedita eaque quidem quos consequatur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whay;