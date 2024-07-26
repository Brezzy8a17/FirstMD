import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signupImg } from "../utils";
// importing appwrite tools
import { account, ID } from "../appwriteConfig";

const SignUp = () => {
  //form input useState
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  //useState for banners
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message
  const [regSuccess, setRegSuccess] = useState(""); //state variable for a successful registration

  // registration form
  const registerForm = useRef(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (Password === ConfirmPassword) {
      try {
        const response = await account.create(ID.unique(), Email, Password);
        console.log("Registration successful", response);
        setErrorMessage(""); // Clear the error message on successful registration
        setRegSuccess("Registration Successful");
        setTimeout(() => {
          window.location.reload();
        }, 1500); // Reloads the page after 1 second
      } catch (error) {
        console.log("Registration failed", error);
        setErrorMessage("Registration failed: " + error.message);
        setTimeout(() => {
          window.location.reload();
        }, 1500); // Reloads the page after 1.5 second
      }
    } else {
      setErrorMessage("Passwords do not match");
      setTimeout(() => {
        window.location.reload();
      }, 1500); // Reloads the page after 1.5 second
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2">
          <img
            src={signupImg}
            width={700}
            height={570}
            alt="SignUp"
            className="mx-5"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
          <a className=" text-blue-500 mb-4 text-xl justify-center font-semibold">
            Sign Up
          </a>

          {errorMessage && (
            <div className="bg-red-500 text-white p-2 mb-4 rounded">
              {errorMessage}
            </div>
          )}

          {regSuccess && (
            <div className="bg-blue-700 text-white p-2 mb-4 rounded">
              {regSuccess}
            </div>
          )}

          <form
            ref={registerForm}
            onSubmit={handleSignUp}
            className="form min-w-96 gap-4 opacity-1"
          >
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmpassword"
              required
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-100">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
