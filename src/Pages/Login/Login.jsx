import React, { useContext, useEffect, useRef, useState } from 'react';
import login from '../../assets/lottie/login.json'
import Lottie from "lottie-react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from "react-hook-form"
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const [disabled,setDisabled] = useState(true);
    const captchaRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
   const form = location?.state?.from?.pathName || ('/')
   console.log(location)

    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm()

const onSubmit = (data) => {
    
    // console.log(data.password)
    signInUser(data.email,data.pass)
    .then((res) => {
      Swal.fire({
        text: "Successfully sign in",
        icon: "success",
      });
      // navigate (form,{replace:true})
      navigate('/')
      }).catch((error) => {
        console.log(error)
        Swal.fire({
          text: `${error.message}`,
          icon: "success",
        });
      });

}

    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const handleValidateCaptcha = e =>{
        // e.preventDefault()
        const user_captcha_value = captchaRef.current.value
        // console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            // alert('Captcha Matched');
            Swal.fire({
              text: "Captcha Matched",
              icon: "success",
              timer: 1200
            });
            setDisabled(false)
        }else{
            // console.log('')
            Swal.fire({
              text: "Not matched 😢😭",
              icon: "error",
              timer: 1200
            });
            setDisabled(true)
        }
    }
    return (

    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content block lg:flex">
      <div className="text-center lg:text-left w-full md:w-1/2">
       <Lottie animationData={login} loop={true}/>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
             <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
             {/* {errors.email && <span className="text-red-600">Email is required</span>} */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name='pass' placeholder="password" className="input input-bordered"  {...register("pass")} required />
          </div>
          <p><small>New Here? <Link to="/register">Create an account</Link> </small></p>
          <div className="form-control">
         
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input type="text" ref={captchaRef} placeholder="password" className="input input-bordered" required />
            <button type='button' onClick={handleValidateCaptcha} className='btn w-full'>validate</button>
          </div>
          <div className="form-control mt-6">
            {/* <button disabled={disabled} className="btn btn-primary">Login</button> */}
            <input type="submit" disabled={disabled} className="btn btn-primary" value="login"></input>
          </div>
          <div className="divider"></div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  </div>
    );
};

export default Login;