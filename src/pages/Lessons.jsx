import { Link } from "react-router-dom";

export default function Lessons({ videos, yourLessons, setYourLessons, setRecommendedLessons }) {
  console.log(yourLessons)
  return (
    <div className="font-fredoka w-full flex flex-col gap-5">
      <h1 className="text-6xl font-semibold">Welcome back, Aditya!</h1>
      {yourLessons.length > 0 ? (
        <YourLessons
          yourLessons={yourLessons}
        />
      ) : null}
      <RecommendedVideos
        videos={videos}
        setYourLessons={setYourLessons}
        setRecommendedLessons={setRecommendedLessons}
      />
    </div>
  );
}

function YourLessons({ yourLessons }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">My Lessons</h1>
      <div className="grid w-full gap-4 items-stretch grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {yourLessons.map((video) => (
          <VideoCard
            key={video.articleId}
            video={video}
          />
        ))}
      </div>
    </div>
  );
}

function RecommendedVideos({ videos, setYourLessons, setRecommendedLessons }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Recommended Lessons</h1>
      <div className="grid w-full gap-4 items-stretch grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((video) => (
          <VideoCard
            key={video.articleId}
            video={video}
            setYourLessons={setYourLessons}
            setRecommendedLessons={setRecommendedLessons}
          />
        ))}
      </div>
    </div>
  );
}

function VideoCard({ video, setYourLessons, setRecommendedLessons }) {
  const onAddLesson = () => {
    const newVideo = {...video, started: true}
    setYourLessons(allLessons => [newVideo, ...allLessons]);
    setRecommendedLessons(prev => prev.map(vid => vid.articleId === newVideo.articleId ? {...vid, started: true} : vid))
  }

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden bg-white border shadow-xl border-gray-200">
      <div className="w-full aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={video.imgUrl.trim()}
          alt=""
        />
      </div>

      <div className="p-3 flex-1 flex flex-col gap-5">
        <h2 className="capitalize font-semibold text-2xl">
          {video.topic_name}
        </h2>
        <p className="capitalize text-gray-600 text-md">{video.topic_desc}</p>
        <div className="w-full flex justify-between">
          <span className="capitalize text-md px-2 py-1 w-fit rounded bg-green-100 text-green-700">
            {video.category}
          </span>
          <span className="capitalize text-md px-2 py-1 w-fit rounded-full bg-gray-300 text-gray-700">
            {video.started ? "Started" : "Not Started"}
          </span>
        </div>

        {/* This pushes the button to the bottom */}
        {video.started ? <Link
          to={`/lessons/${video.articleId}`}
          className="mt-auto w-full rounded hover:cursor-pointer transition-all duration-500 bg-green-600 text-white text-md font-medium py-2 hover:bg-green-700 text-center"
        >
          Continue Lesson
        </Link> : <Link
          onClick={onAddLesson}
          to={`/lessons/${video.articleId}`}
          className="mt-auto w-full rounded hover:cursor-pointer transition-all duration-500 bg-green-600 text-white text-md font-medium py-2 hover:bg-green-700 text-center"
        >
          Start Lesson
        </Link>}
      </div>
    </div>
  );
}
