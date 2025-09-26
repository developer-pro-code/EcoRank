import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from 'react';



export default function Leaderboard(){
  const [leaderboard, setLeaderboard] = useState([]); // State to store leaderboard data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from Supabase
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Fetch data from Supabase
        const { data, error } = await supabase
          .from('profiles')
          .select('username, xp')
          .order('xp', { ascending: false }); // Sort by XP in descending order

        if (error) {
          throw error;
        }

        // Set leaderboard data
        setLeaderboard(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold font-fredoka text-center">Leaderboard</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>XP</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.xp}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
  <thead>
    <tr className="bg-green-100">
      <th className="py-2 px-4 text-left border-b border-gray-300">Username</th>
      <th className="py-2 px-4 text-left border-b border-gray-300">XP</th>
    </tr>
  </thead>
  <tbody>
    {leaderboard.map((user, index) => (
      <tr
        key={user.username}
        className={index % 2 === 0 ? "bg-white" : "bg-green-50"}
      >
        <td className="py-2 px-4 border-b border-gray-200 capitalize">{user.username}</td>
        <td className="py-2 px-4 border-b border-gray-200">{user.xp}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};


  // return <div className="font-fredoka w-full flex-1">leaderboard</div>
// }