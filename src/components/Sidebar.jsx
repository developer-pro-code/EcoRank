import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="border-gray-300 border-2 flex flex-col gap-2 w-64 h-dvh rounded-md outline-none py-4 px-2 font-fredoka font-medium bg-white">
      <NavBtn to="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
        >
          <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
        </svg>
        <span className="mt-1">Home</span>
      </NavBtn>

      <NavBtn to="lessons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
        >
          <path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z" />
        </svg>
        <span className="mt-1">Lessons</span>
      </NavBtn>

      <NavBtn to="challenges">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
        >
          <path d="M292-120v-66.67h154.67v-140q-52.34-11-93.17-44.83T296-456q-74.33-8.33-125.17-61.83Q120-571.33 120-645.33V-688q0-27.67 19.5-47.17t47.17-19.5h96V-840h394.66v85.33h96q27.67 0 47.17 19.5T840-688v42.67q0 74-50.83 127.5Q738.33-464.33 664-456q-16.67 50.67-57.5 84.5t-93.17 44.83v140H668V-120H292Zm-9.33-406.67V-688h-96v42.67q0 42.66 27 75.16t69 43.5ZM480-390q54.67 0 92.67-38.33 38-38.34 38-93v-252H349.33v252q0 54.66 38 93Q425.33-390 480-390Zm197.33-136.67q42-11 69-43.5t27-75.16V-688h-96v161.33ZM480-582Z" />
        </svg>
        <span>Challenges & Quizzes</span>
      </NavBtn>

      <NavBtn to="leaderboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
        >
          <path d="M146.67-186.67h178v-346.66h-178v346.66Zm244.66 0h177.34v-586.66H391.33v586.66Zm244 0h178v-266.66h-178v266.66ZM80-120v-480h244.67v-240h310.66v320H880v400H80Z" />
        </svg>
        <span className="mt-1">Leaderboard</span>
      </NavBtn>

      {/* <NavBtn to="rewards">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
        >
          <path d="m306.22-701.88 115.45-149.79q11.33-14.66 26.55-21.83 15.23-7.17 31.84-7.17t31.77 7.17q15.17 7.17 26.5 21.83l115.45 149.79L829-643q24 8 37.67 27.91 13.66 19.9 13.66 43.98 0 11.11-3.19 22.2-3.18 11.08-10.47 21.24L754-367l4 170q.33 32.33-21.67 54.67-22 22.33-52.11 22.33-1.89 0-19.89-3L480-174.33l-184.19 51.28q-5.14 2.05-10.82 2.55-5.67.5-10.4.5-30.26 0-51.92-22.46Q201-164.92 202-197.67l4-170.5L93.67-528.33q-7.29-10.22-10.48-21.37Q80-560.85 80-572q0-23.67 13.45-43.24Q106.89-634.81 131-643l175.22-58.88Zm40.45 57.55-204 68 130.66 189-4.66 201.66L480-244l211.33 59.33-4.66-202.66 130.66-187-204-70L480-818 346.67-644.33Zm133.33 143Z" />
        </svg>
        <span className="mt-1">Rewards</span>
      </NavBtn> */}
    </div>
  );
}

function NavBtn({ children, to }) {
  return (
    <NavLink to={to} className={({isActive}) => isActive ? "bg-green-100/60 rounded-md" : "hover:bg-gray-100"}>
      <div className="hover:cursor-pointer transition-all duration-300 rounded-md py-2">
        <button className="hover:cursor-pointer flex h-fit items-center justify-between w-fit gap-3 rounded-lg px-2">
          {children}
        </button>
      </div>
    </NavLink>
  );
}
