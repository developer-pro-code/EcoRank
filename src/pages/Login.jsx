import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import EcoRankImg from "../assets/EcoRank.jpeg"

export default function Login() {

  
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    


    const { signInUser } = UserAuth();
    const navigate = useNavigate();
    // console.log(session);
     console.log(email, password);

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const result = await signInUser(email, password);

             if (result.success) {
                navigate("/app"); // Navigate to dashboard on success
            } else {
                setError(result.error.message); // Show error message on failure
            }

        }catch(err){
            setError("an errorr occurred");
            console.log(err)
        }finally{
            setLoading(false);
        }

    };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-slate-800"
          >
            <img
              className="w-16 h-16 mr-2 rounded-full"
              src={EcoRankImg}
              alt="logo"
            />
            EcoRank
          </Link>
          <div className="w-full bg-white rounded-lg shadow border border-slate-200 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form onSubmit={handleSignIn} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-slate-700"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md w-full p-2.5 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md w-full p-2.5 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    required=""
                  />
                </div>
                
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="text-sm font-medium text-[#58A547FF] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full hover:cursor-pointer rounded bg-[#58A547FF] py-2.5 px-5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#58A549fe] focus:shadow-none active:bg-[#58A55A68] hover:bg-[#58A547AA] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-slate-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/"
                    className="font-medium text-[#58A547FF] hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
                {error && <p className="submit-error">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}