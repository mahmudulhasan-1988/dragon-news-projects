'use client'
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';

import React from 'react';
import { useForm } from 'react-hook-form';


const LoginPage = () => {

const {register,
    handleSubmit, watch, formState: {errors}} = useForm()

const handleLoginFunc = async (data)=>{
    console.log(data, "data");

// const { data: res, error } = await authClient.signIn.email({
//     email: data.email, // required
//     password: data.password, // required
//     rememberMe: true,
//     callbackURL: "/",
// });
// console.log(res, error);
// e.preventDefault();
// const email = e.target.email.value;
// const password = e.target.password.value;
// console.log(email, password);
};


    return (
        <div className=' container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-8'>
            <div className=' p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Login your Account</h2>


                <form className=' space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" className="input" placeholder="Type here email" 
                        {...register("email", {required: "Email field is required"})}/>
                        {errors.email && <p className=' text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Type here password"
                        {...register("password", {required: "Password field is required"})} />
                        {errors.password && <p className=' text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                {/* <p className=' text-center mt-4'>Don't have an account? <Link href={"/register"} className=' text-red-500 font-semibold'>Register</Link></p> */}
            </div>
        </div>
    );
};

export default LoginPage;