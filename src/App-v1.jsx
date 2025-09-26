import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { UserAuth } from "./context/AuthContext.jsx";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Challenges from "./pages/Challenges_Quizzes";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import Article from "./pages/Article";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { fetchLessons } from "./fetchLessons.js";
import Lessons1 from "./pages/Lessons1.jsx";

function ProtectedRoute({ children }) {
  const { session } = UserAuth();
  if (session === undefined) return null; // or a
  return session ? children : <Navigate to="/" />
}

export default function AppV1(){
    const [recommendedLessons, setRecommendedLessons] = useState([]);
      const [yourLessons, setYourLessons] = useState([]);
      const [searchQuery, setSearchQuery] = useState("");

      useEffect(() => {
          const func = async () => {
            const all_data = await fetchLessons()
            console.log(all_data)
            setRecommendedLessons(all_data)
          }
          func()
        }, [])

    return <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <PageLayout
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />{" "}
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="lessons"
            element={
              <Lessons1
                setRecommendedLessons={setRecommendedLessons}
                yourLessons={yourLessons}
                setYourLessons={setYourLessons}
                lessons={recommendedLessons}
              />
            }
          />
          <Route path="lessons/:id" element={<Article />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="rewards" element={<Rewards />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
    </div>
}