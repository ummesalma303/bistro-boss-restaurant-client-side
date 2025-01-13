import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const {googleLogin} = useContext(AuthContext);
    const handleGoogleLogin = ()=> {
        googleLogin()
        .then(res => {
            
            // console.log(res.user.displayName)
            const userInfo={
                name: res.user.displayName,
                email: res.user.email
              }
            //   console.log(userInfo)
              axiosPublic.post(`/users`,userInfo)
              .then(res=>{
                
                // console.log(res.data)
            })
              .catch(err=>{
                // console.log(err)
            })
        })
        .catch(err=>{
            // console.log(err)
        })
    }
    return (
        <div>
            <button type='button' onClick={handleGoogleLogin} className='btn btn-secondary'>Login With Google</button>
        </div>
    );
};

export default SocialLogin;