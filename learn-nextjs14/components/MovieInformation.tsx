import { API_URL } from "../constants";

const MovieInformation = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return <div>movie {JSON.stringify(movie)}</div>;
};

export default MovieInformation;

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/movies/${id}`);
  const json = await response.json();

  return json;
};
