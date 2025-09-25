import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import EcoRank from "../assets/EcoRank.jpeg"

export default function SignUp(){
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const { signUpNewUser } = UserAuth();
    const navigate = useNavigate();
    // console.log(session);
     console.log(email, password);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const result = await signUpNewUser(email, password);

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




  return <div>
    <section  className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-slate-800">
          <img className="w-16 h-16 rounded-full mr-2" src={EcoRank} alt="logo" />
          EcoRank
      </Link>
      <div className="w-full bg-white rounded-lg shadow border border-slate-200 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl">
                  Create an account
              </h1>
              <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">Your email</label>
                      <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md w-full p-2.5 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-700">Password</label>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md w-full p-2.5 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" required="" />
                  </div>
                  {/* <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-slate-700">Confirm password</label>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md w-full p-2.5 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" required="" /> 
                  </div> */}
                  {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-slate-300 rounded bg-white focus:ring-2 focus:ring-[#58A547FF]" required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-slate-500">I accept the <a className="font-medium text-[#58A547FF] hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                  </div> */}
                  <button disabled={loading} type="submit" className="w-full hover:cursor-pointer rounded bg-[#58A547FF] py-2.5 px-5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#58A549fe] focus:shadow-none active:bg-[#58A55A68] hover:bg-[#58A547AA] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Create an account</button>
                  <p className="text-sm font-light text-slate-500">
                      Already have an account? <Link to="/login" className="font-medium text-[#58A547FF] hover:underline">Login here</Link>
                  </p>
                  {error && <p>{error}</p>}
              </form>
          </div>
      </div>
  </div>
</section>
  </div>
}