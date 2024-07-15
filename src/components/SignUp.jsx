import React, { useState } from 'react';
import { signupImg } from '../utils';
import {Link} from 'react-router-dom';

import GSAP from 'gsap';
import { useGSAP } from '@gsap/react';

//implament the GSAP Scrolling feature later 7.13.2024

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up Email: " + Email, "Password: " + Password, "Confirm Password: " + ConfirmPassword);
  };

  

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2">
          <img src={signupImg} width={700} height={570} alt="SignUp" className='mx-5' />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          
          <a className=" text-blue-100 mb-4 text-xl justify-center font-semibold">Sign Up</a>
          
          <form onSubmit={handleSignUp} className="form min-w-96 gap-4 opacity-1">
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="p-2 border rounded"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
          </form>
          <p className="mt-4">Already have an account? <Link to = "/Login" className="text-blue-100">Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignUp;

