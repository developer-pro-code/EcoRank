import { useNavigate } from "react-router-dom";
import EcoRankImg from "../assets/EcoRank.jpeg"
import { UserAuth } from "../context/AuthContext";

export default function Header({searchQuery, setSearchQuery, onSearch}) {


   const {session, signOut} = UserAuth();
    
  return (
    <div className="flex flex-1 justify-between items-center w-full py-5">
      <Logo />

      <div className="flex justify-between gap-3 items-center">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />
        <UserAccount />
        <LogOut />
      </div>
    </div>
  );
}

function Logo() {
  return <div className="text-2xl flex items-center gap-2 font-fredoka font-semibold">
    <img src={EcoRankImg} className="rounded-full w-16" />
    <h1>EcoRank</h1>
  </div>;
}

function Search({setSearchQuery}) {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search lessons or challenges..."
        />
        <button
          className="absolute hover:cursor-pointer top-1 right-1 flex items-center rounded bg-[#58A547FF] py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#58A549fe] focus:shadow-none active:bg-[#58A55A68] hover:bg-[#58A547AA] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}

function UserAccount() {
  return (
    <div className="w-8 hover:cursor-pointer bg-gray-400 rounded-full">
      <img src="https://cdn-icons-png.flaticon.com/512/552/552848.png" alt="" />
    </div>
  );
}

function LogOut(){

  const {session, signOut} = UserAuth();
    const navigate = useNavigate();

    console.log(session);

    const handleSignOut = async (e) =>{
        e.preventDefault();
        try{
            await signOut();
            navigate('/');
        }catch(err){
            console.error(err);
        }
    };


  return <div onClick={handleSignOut} className="px-4 py-2 bg-green-300 rounded-md hover:cursor-pointer hover:bg-green-500 transition-all duration-300">
    <button className="hover:cursor-pointer">LogOut</button>
  </div>
}