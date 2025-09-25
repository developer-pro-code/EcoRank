import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Challenges from "./pages/Challenges_Quizzes";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import Article from "./pages/Article";
import { useState } from "react";

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
  }
];

export default function App() {
  const [recommendedLessons, setRecommendedLessons] = useState(videos);
  const [yourLessons, setYourLessons] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<Home />} />
          <Route path="lessons" element={<Lessons setRecommendedLessons={setRecommendedLessons} yourLessons={yourLessons} setYourLessons={setYourLessons} videos={recommendedLessons} />} />
          <Route path="lessons/:id" element={<Article videos={videos} />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
