'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignin = async()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data, "google");
    }
    const handleGithubSignin = async()=>{
        const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data, "google");
    }
    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}><FaGoogle />
                    Login with Google</button>
                <button className='btn border-zinc-500 ' onClick={handleGithubSignin}><FaGithub />
                    Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;