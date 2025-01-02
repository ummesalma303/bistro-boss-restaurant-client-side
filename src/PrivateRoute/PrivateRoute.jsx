import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
// import { Form } from 'react-hook-form';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    // console.log(location)
    const {loading,user} = useContext(AuthContext)
    if (loading) {
        return <h2>Loading....</h2>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivateRoute;