import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import fetcher from '../api/config';

const Login = () => {
  const [user,setUser]=useState(" ");
 
  const {register,handleSubmit,reset}=useForm();
  const onSubmit = async(data)=>{
    const res = await fetcher.post('login',data);
    setUser(res.data.result);
    // reset()
  }
  // useEffect(()=>{
    if(user === 'valid'){
      return <Navigate to='/'/>
    }
// },[user])
    return (
        <div class="flex justify-center bg-accent items-center h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <h1 className='text-2xl text-center'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" {...register('email')} class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" {...register('password')}  class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-primary">Login</button>
        </div>
        <div>
          <small>New at Clean Co? Please
            <Link to='/signup'> SignUp</Link>
          </small>
        </div>
      </form>
        <div class="divider">OR</div>
        <button className='btn btn-glass hover:btn-accent'>Continue With Google</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;