import { useParams } from "react-router-dom";

export default function Article({ videos }) {
  const { id } = useParams();
  console.log(videos); // check what this logs
  if (!videos || videos.length === 0) {
    return <div>Loading...</div>; // show a loading state if no videos are available
  }

  const vid = videos.find((video) => video.id === Number(id));
  console.log(vid); // check if vid is found

  if (!vid) {
    return <div>Video not found</div>; // handle the case where the video is not found
  }

  return (
    <div>
      
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-fredoka">{vid["topic_name"]}</h1>
      <span className="flex px-4 py-2 items-center bg-yellow-300 rounded-md">{vid["eco_coins"]} Eco-Coins</span>
      </div>
      <img src={vid["imgUrl"]} className="w-full" alt="" />
      {vid["para"].map(para => {
        return <div className="flex flex-col gap-2 mt-10">
          <h2 className="text-3xl font-semibold">{para.subheading}</h2>
          <p className="text-xl">{para.content}</p>
        </div>
      })}
    </div>
  );
}
