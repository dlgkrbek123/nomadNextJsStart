import { API_URL } from "../constants";

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;

const getVideos = async (id) => {
  const response = await fetch(`${API_URL}/movies/${id}/videos`);
  const json = await response.json();

  return json;
};
