import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
// import Lottie from "lottie-react";
// import register from '../../assets/lottie/login.json'
import registerImg from '../../assets/lottie/login.json'
import Lottie from "lottie-react";
import Swal from 'sweetalert2'

import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
     const {newUser,updateUser,signOutUser} = useContext(AuthContext);
    const location = useLocation()
   const form = location?.state?.from?.pathName || ('/')
     const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
        newUser(data.email,data.password)
        .then(res=>{
            updateUser(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                          title: "success",
                          text: "Successfully login user",
                          icon: "success",
                        });
                        signOutUser()
                        .then(res=>{
                         navigate (form,{replace:true})
                        })

                    })
                    .catch(error => console.log(error))
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content block lg:flex">
         <div className="text-center lg:text-left w-full md:w-1/2">
       <Lottie animationData={registerImg} loop={true}/>
      </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' {...register("name", { required: true })} className="input input-bordered"  />
          {errors.name&& <p className='text-red-500' role="alert">name is required</p>}
        </div>
        {/* photo url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="url" name='photo' placeholder="pppphoto🐟"  {...register("photo", { required: true })} className="input input-bordered" required />
        </div>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  {...register("email", { required: true })} placeholder="email" className="input input-bordered"  />
          {errors.email?.type === 'required' && <p className="text-red-600">email is required</p>}
        </div>
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password'  {...register("password", { 
            required: true,
            minLength:6,
            maxLength:11,
            pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
            })} placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-600">Password at last 6 carrcters</p>}
          {errors.password?.type === 'maxLength' && <p className="text-red-600"> Password must be less than 11 characters</p>}
          {errors.password?.type === 'pattern' && <p className="text-red-600"> Password must have one Uppercase one lower case, one number and one special character.</p>}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>

        </div>
      </div>
    );
};

export default Register;