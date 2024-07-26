import { useRef } from "react";
import { Link } from "react-router-dom";
import { loginImg } from "../utils";

import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const { user, LoginUser } = useAuth();

  const LoginForm = useRef(null);

  //handle sumbit of the cred
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = LoginForm.current.email.value;
    const password = LoginForm.current.password.value;
    const adminID = LoginForm.current.adminID.value;

    if (adminID == null) {
      const userInfo = { email, password };
      LoginUser(userInfo);
    } else {
      const userInfo = { email, password, adminID };
      LoginUser(userInfo);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <img
          src={loginImg}
          width={800}
          height={520}
          alt="Login"
          className="mx-5"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <a className=" text-blue-700 mb-4 text-xl justify-center font-semibold">
          Login
        </a>
        <form
          ref={LoginForm}
          onSubmit={handleSubmit}
          className="form min-w-96 gap-4 opacity-1"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="adminID"
            placeholder="Admin ID"
            className="p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {" "}
            Login{" "}
          </button>
        </form>

        <p className="mt-4">
          Are you a new user?{" "}
          <Link to="/SignUp" className="text-blue-100">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
