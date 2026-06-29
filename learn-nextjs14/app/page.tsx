import Link from "next/link";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

const Page = async () => {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Page;

const getMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  const json = await response.json();

  return json;
};
