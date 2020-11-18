import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import '../Home/Home.css'
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import Traning from '../Traning/Traning';
import Whay from '../Whay/Whay';
import Workout from '../Workout/Workout';

const Home = () => {
    return (
        <div>
            <div className="bg-main">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            </div>
            <Workout></Workout>
            <About></About>
            <Traning></Traning>
            <Whay></Whay>
            <Footer></Footer>
        </div>
    );
};

export default Home;