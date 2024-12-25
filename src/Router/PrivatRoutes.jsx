import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import Loading from '../Component/Loading';


const PrivatRoutes = ({children}) => {
    const { user,loading } = useContext(Authcontext);
    const location = useLocation()
if(loading){
    return <Loading></Loading>
}
    if (user && user?.email) {
        return children;
    }

   
    return <Navigate state={location.pathname} to="/login" />;
};

export default PrivatRoutes;