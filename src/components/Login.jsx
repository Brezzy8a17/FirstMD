import React, { useState } from 'react';
import { loginImg } from '../utils';
import {Link} from "react-router-dom";

//using appwrite to manage login

import {account, ID} from "../lib/appwrite";

const Login = () => {
  //this is for the form login
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [AdminID, setAdminID] = useState("")

  //log the user if signed in
  const [loggedInUser, setloggedInUser] = useState(null);


  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div className="flex my-0 justify-center items-center h-screen">
      <div className="w-1/2">
        <img src={loginImg} width={800} height={520} alt="login" className='mx-5' />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <a className=" text-blue-100 mb-4 text-xl justify-center font-semibold">Login</a>

        <form onSubmit={handleLogin} className="form min-w-96 my-2 gap-4 opacity-1">
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
              type = "AdminID"
              placeholder='Admin ID'
              value ={AdminID}
              onChange={(e) => setAdminID(e.target.value)}
              className= "p-2 rounded"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
        <p> Are you a new user? <Link to="/SignUp" className='text-blue-100' >Sign Up</Link></p>
      </div>
    </div>
  );
};
//create an admin panel
export default Login;
