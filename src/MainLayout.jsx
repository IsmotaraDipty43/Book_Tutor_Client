import React from 'react';
import Navber from './Component/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';


const MainLayout = () => {
   
    return (
      

        <div>
            <Navber></Navber>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    
    );
};

export default MainLayout;