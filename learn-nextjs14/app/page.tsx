import MovieItem from "../components/MovieItem";
import { API_URL } from "../constants";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

const Page = async () => {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
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
