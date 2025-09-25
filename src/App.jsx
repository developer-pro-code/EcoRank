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

const videos = [
  {
    articleId: "1",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/003/301/710/non_2x/clean-energy-renewable-elctricity-powerconcept-with-various-model-free-vector.jpg ",
    topic_name: "renewable energy sources",
    topic_desc: "an introduction to solar, wind and hydro technologies",
    category: "energy",
    started: false,
    completed: false,
  },
  {
    articleId: "2",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/000/521/411/large_2x/vector-nature.jpg",
    topic_name: "protecting biodiversity",
    topic_desc:
      "understand the importance of ecosystems and how to protect species",
    category: "ecology",
    started: false,
    completed: false,
  },
];

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/app",
//     element: <PageLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "lessons",
//         element: (
//           <Lessons
//             setRecommendedLessons={setRecommendedLessons}
//             yourLessons={yourLessons}
//             setYourLessons={setYourLessons}
//             videos={recommendedLessons}
//           />
//         ),
//       },
//       {
//         path: "lessons/:id",
//         element: <Article videos={videos} />,
//       },
//       {
//         path: "challenges",
//         element: <Challenges />,
//       },
//       {
//         path: "leaderboard",
//         element: <Leaderboard />,
//       },
//       {
//         path: "rewards",
//         element: <Rewards />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <div>Page not found</div>,
//   },
// ]);

function ProtectedRoute({ children }) {
  const { session } = UserAuth();
  if (session === undefined) return null; // or a
  return session ? children : <Navigate to="/" />;
}

export default function App() {
  const [recommendedLessons, setRecommendedLessons] = useState(videos);
  const [yourLessons, setYourLessons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = useCallback(() => {
    if (searchQuery.length) {
      const recommendedSearchedVideos = videos.filter(
        (rv) =>
          rv.topic_name.includes(searchQuery) ||
          rv.topic_desc.includes(searchQuery)
      );
      setRecommendedLessons(
        recommendedSearchedVideos.length ? recommendedSearchedVideos : videos
      );
    } else {
      setRecommendedLessons(videos);
    }
  }, [searchQuery]);

  useEffect(() => {
    onSearch();
  }, [searchQuery, onSearch]);
  useEffect(() => {
    onSearch();
  }, [searchQuery, onSearch]);

  return (
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
              <Lessons
                setRecommendedLessons={setRecommendedLessons}
                yourLessons={yourLessons}
                setYourLessons={setYourLessons}
                videos={recommendedLessons}
              />
            }
          />
          <Route path="lessons/:id" element={<Article videos={videos} />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="rewards" element={<Rewards />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
