import { API_URL } from "../constants";
import styles from "./MovieVideos.module.css";

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
};

export default MovieVideos;

const getVideos = async (id) => {
  const response = await fetch(`${API_URL}/movies/${id}/videos`);
  const json = await response.json();

  return json;
};
