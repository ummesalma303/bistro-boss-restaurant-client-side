import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <h2>Loading....</h2>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;