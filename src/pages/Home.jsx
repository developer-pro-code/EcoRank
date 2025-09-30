import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
const announcements = [
  {
    date: new Date(),
    message:
      "Join the Ocean Cleanup Challenge this weekend and earn bonus Eco-Points!",
  },
  {
    date: new Date(),
    message: "Explore our newly update module on renewable energy resources.",
  },
  {
    date: new Date(),
    message:
      "Remember to bring your resuable bags and bottles everywhere you go!",
  }
];

export default function Home() {

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsername = async () => {
      setLoading(true);
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("User fetch error:", userError);
        setLoading(false);
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Profile fetch error:", profileError.message);
      } else {
        setUsername(profile.username);
      }

      setLoading(false);
    };

    fetchUsername();
  }, []);

  console.log(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="font-fredoka w-full flex-1">
      <WelcomeBoard profileName={username}/>

      {/* Summary Cards Section */}
      <div className="w-full flex gap-4 mt-6">
        <ProgressSummaryCard>
          <img
            src="   https://cdn-icons-png.flaticon.com/512/8754/8754417.png "
            className="w-16"
            alt=""
          />
          <span className="text-4xl font-semibold">1250</span>
          <span className="text-xl text-gray-500">Total Eco-Points</span>
        </ProgressSummaryCard>

        <ProgressSummaryCard>
          <img
            src="https://cdn-icons-png.flaticon.com/512/14090/14090371.png"
            className="w-16"
            alt=""
          />
          <span className="text-4xl font-semibold">8</span>
          <span className="text-xl text-gray-500">Lessons Completed</span>
        </ProgressSummaryCard>

        <ProgressSummaryCard>
          <img
            src="   https://cdn-icons-png.flaticon.com/512/5380/5380876.png "
            className="w-16"
            alt=""
          />
          <span className="text-4xl font-semibold">5</span>
          <span className="text-xl text-gray-500">Badges Earned</span>
        </ProgressSummaryCard>
      </div>

      {/* Navigation Card Section */}
      <div className="w-full flex gap-3 mt-6">
        <NavigationCard to="lessons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            width="80px"
            viewBox="0 -960 960 960"
            fill="#996515"
          >
            <path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z" />
          </svg>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">Interactive Lessons</h2>
            <p className="text-md text-gray-500">
              Dive into engagging modules about environmental science
            </p>
          </div>
        </NavigationCard>

        <NavigationCard to="challenges">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            width="80px"
            viewBox="0 -960 960 960"
            fill="#996515"
          >
            <path d="M292-120v-66.67h154.67v-140q-52.34-11-93.17-44.83T296-456q-74.33-8.33-125.17-61.83Q120-571.33 120-645.33V-688q0-27.67 19.5-47.17t47.17-19.5h96V-840h394.66v85.33h96q27.67 0 47.17 19.5T840-688v42.67q0 74-50.83 127.5Q738.33-464.33 664-456q-16.67 50.67-57.5 84.5t-93.17 44.83v140H668V-120H292Zm-9.33-406.67V-688h-96v42.67q0 42.66 27 75.16t69 43.5ZM480-390q54.67 0 92.67-38.33 38-38.34 38-93v-252H349.33v252q0 54.66 38 93Q425.33-390 480-390Zm197.33-136.67q42-11 69-43.5t27-75.16V-688h-96v161.33ZM480-582Z" />
          </svg>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">Challenges & Quizzes</h2>
            <p className="text-md text-gray-500">
              Test your knowledge and participate in real-world eco tasks
            </p>
          </div>
        </NavigationCard>

        <NavigationCard to="leaderboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            width="80px"
            viewBox="0 -960 960 960"
            fill="#996515"
          >
            <path d="M146.67-186.67h178v-346.66h-178v346.66Zm244.66 0h177.34v-586.66H391.33v586.66Zm244 0h178v-266.66h-178v266.66ZM80-120v-480h244.67v-240h310.66v320H880v400H80Z" />
          </svg>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">Eco-Points & Leaderboard</h2>
            <p className="text-md text-gray-500">
              Track your progress and see how you rank globally
            </p>
          </div>
        </NavigationCard>

        <NavigationCard to="rewards">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            width="80px"
            viewBox="0 -960 960 960"
            fill="#996515"
          >
            <path d="m306.22-701.88 115.45-149.79q11.33-14.66 26.55-21.83 15.23-7.17 31.84-7.17t31.77 7.17q15.17 7.17 26.5 21.83l115.45 149.79L829-643q24 8 37.67 27.91 13.66 19.9 13.66 43.98 0 11.11-3.19 22.2-3.18 11.08-10.47 21.24L754-367l4 170q.33 32.33-21.67 54.67-22 22.33-52.11 22.33-1.89 0-19.89-3L480-174.33l-184.19 51.28q-5.14 2.05-10.82 2.55-5.67.5-10.4.5-30.26 0-51.92-22.46Q201-164.92 202-197.67l4-170.5L93.67-528.33q-7.29-10.22-10.48-21.37Q80-560.85 80-572q0-23.67 13.45-43.24Q106.89-634.81 131-643l175.22-58.88Zm40.45 57.55-204 68 130.66 189-4.66 201.66L480-244l211.33 59.33-4.66-202.66 130.66-187-204-70L480-818 346.67-644.33Zm133.33 143Z" />
          </svg>

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">Rewards & Badges</h2>
            <p className="text-md text-gray-500">
              View your earned achievements and unlock new rewards
            </p>
          </div>
        </NavigationCard>
      </div>

      <div className="flex flex-col gap-10 px-4 py-4 mt-5 bg-[#F7F7F7] rounded-md shadow-[2px_6px_11px_-2px_rgba(0,_0,_0,_0.1)] max-h-64">
        <h2 className="font-semibold text-3xl">Teacher Announcements</h2>

        <div className="flex flex-col gap-6 overflow-y-auto">
          {announcements.length > 0 ? announcements.map((announcement) => (
            <TeacherAnnouncementCard
              message={announcement.message}
              key={announcement.message}
              date={announcement.date.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
            />
          )) : <p>No announcements yet</p>}
        </div>
      </div>
    </div>
  );
}

function WelcomeBoard({profileName}) {
  return (
    <div className="px-8 py-4 flex flex-col gap-2 rounded-md bg-green-50 w-full">
      <h1 className="text-6xl font-semibold">Hey there {profileName}!👋</h1>
      <p className="text-2xl text-gray-600">
        Your journey to a greener planet continues. Let's make an impact!
      </p>
    </div>
  );
}

function ProgressSummaryCard({ children }) {
  return (
    <div className="bg-[#F7F7F7] flex flex-1/3 py-6 shadow-[2px_6px_11px_-2px_rgba(0,_0,_0,_0.1)] flex-col items-center gap-6 rounded-md">
      {children}
    </div>
  );
}

function NavigationCard({ children, to }) {
  return (
    <div className="bg-[#F7F7F7] h-[350px] relative flex flex-1/3 py-6 px-4 shadow-[2px_6px_11px_-2px_rgba(0,_0,_0,_0.1)] flex-col gap-6 rounded-md">
      {children}
      <Link to={to}>
        <button className="absolute left-4 hover:cursor-pointer hover:bg-gray-500/20 transition-all duration-300 border-gray-300 border-2 outline-none rounded-md bottom-4 px-4 py-2">
          Explore
        </button>
      </Link>
    </div>
  );
}

function TeacherAnnouncementCard({ message, date }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-500">{date}</p>
      <h3 className="text-xl text-gray-600">{message}</h3>
    </div>
  );
}
