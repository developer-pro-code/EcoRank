import { Link } from "react-router-dom";

export default function Lessons({ videos, yourLessons, setYourLessons, setRecommendedLessons }) {
  return (
    <div className="font-fredoka w-full flex flex-col gap-5">
      <h1 className="text-6xl font-semibold">Welcome back!</h1>

      {yourLessons.length > 0 && <YourLessons yourLessons={yourLessons} />}

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
          <VideoCard key={video.id} video={video} />
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
            key={video.id}  // Using video.id as key
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
  const onAddLesson = (id) => {
    // Update `yourLessons` and `recommendedLessons` states when a lesson is started
    setYourLessons((allLessons) =>
      allLessons.map((lesson) =>
        lesson.id === id ? { ...lesson, started: true } : lesson
      )
    );
    setRecommendedLessons((prev) =>
      prev.map((vid) =>
        vid.id === id ? { ...vid, started: true } : vid
      )
    );
  };

  const progress = video.started ? (video.completed ? 100 : 50) : 0;  // 50% if started, 100% if completed

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden bg-white border shadow-xl border-gray-200">
      <div className="w-full aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={video.imgUrl.trim()} // Ensure URL is clean (trim spaces)
          alt={video.topic_name}
        />
      </div>

      <div className="p-3 flex-1 flex flex-col gap-5">
        <h2 className="capitalize font-semibold text-2xl">{video.topic_name}</h2>
        <p className="capitalize text-gray-600 text-md">{video.topic_description}</p>
        <div className="w-full flex justify-between">
          <span className="capitalize text-md px-2 py-1 w-fit rounded bg-green-100 text-green-700">
            {video.category}
          </span>
          <span className="capitalize text-md px-2 py-1 w-fit rounded-full bg-gray-300 text-gray-700">
            {video.started
              ? video.completed
                ? "Completed"
                : "In Progress"
              : "Not Started"}
          </span>
        </div>

        {video.started && (
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {video.started ? (
          <Link
            to={`/lessons/${video.id}`} // Using video.id for routing
            className="mt-auto w-full rounded hover:cursor-pointer transition-all duration-500 bg-green-600 text-white text-md font-medium py-2 hover:bg-green-700 text-center"
          >
            {video.completed ? "Completed" : "Continue Lesson"}
          </Link>
        ) : (
          <Link
            onClick={() => onAddLesson(video.id)}  // Pass video.id to onAddLesson
            to={`/lessons/${video.id}`}  // Correct path with video.id
            className="mt-auto w-full rounded hover:cursor-pointer transition-all duration-500 bg-green-600 text-white text-md font-medium py-2 hover:bg-green-700 text-center"
          >
            Start Lesson
          </Link>
        )}
      </div>
    </div>
  );
}
