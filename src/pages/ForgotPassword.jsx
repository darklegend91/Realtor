import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom"
import Oauth from "../components/Oauth";

export default function ForgotPassword() {
  const [email, SetEmail] = useState("");

  function onChange(e) {
    setEmail:e.target.value
  }

  return (
    <>
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      </section>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        {/* Left Image Section */}
        <div className="md:w-[50%] lg:w-[35%] mb-12 md:mb-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1693842703126-6337dd42bf32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
            className="rounded-2xl"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[67%] lg:w-[30%] lg:ml-20">
          <form>
            {/* Email Input */}
            <input
              type="email"
              className="w-full mb-5 px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition ease-out"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

              <div className=" flex justify-between whitespace-nowrap text-sm ">
                <p>Don't have an account? 
                    <Link to="/signup">
                    <span className="text-red-500 hover:text-red-600 ml-1 transition duration-200 ease-in-out">Register</span>
                    </Link></p>
                    <p className="text-blue-700 hover:text-blue-900 ml-1 transition duration-200 ease-in-out">
                        <Link to="/signin">Login </Link>
                    </p>
              </div>

              <button type="submit" className=" w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium upppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 mt-5">Send Reset Password</button>

              <div className="mt-3">
              <p className="text-center ">OR</p>
              </div>
          </form>
              <Oauth />
        </div>
      </div>
    </>
  );
}
