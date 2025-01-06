import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
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

export default AdminRoutes;