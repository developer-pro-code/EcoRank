import { useParams } from "react-router-dom";

export default function Article({ videos }) {
  const { id } = useParams();
  const {topic_name, topic_desc, category} = videos.find((video) => video.articleId === id);

  return <div>
    <h1>{topic_name}</h1>
    <p>{topic_desc}</p>
    <p>{category}</p>
  </div>;
}
