import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import photo1 from '../../Image & Icon/drop.png'
import './MainHeader.css'

const MainHeader = () => {
    return (
        <div className="bg-mainheader">
            <main style={{height:'600px' ,   width:'100%'     }} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 ">
                <h1 style={{color:'white'}}> <b>THE BEST FITNESS   <br/>  STUDIO IN TOWN  </b> </h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed in dolores. Ea molestiae aut minima delectus necessitatibus quis sint rem modi, ipsum repellendus distinctio quos. Quae consequatur assumenda hic!</p>
                <button style={{margin:'10px 10px', padding:'10px 30px' , border:'none' , background:'#fcd842' }}>JOIN US</button>
            </div>
            <div className="col-md-6">
                <img src={photo1} alt="" className="img-fluid"/>
            </div>
        </main>
        </div>
    );
};

export default MainHeader;