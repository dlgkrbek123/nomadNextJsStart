import { Suspense } from "react";
import MovieInformation, {
  getMovie,
} from "../../../../components/MovieInformation";
import MovieVideos from "../../../../components/MovieVideos";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id?: string }>;
}) => {
  const { id } = await params;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
};

const MoviePage = async ({ params }: { params: Promise<{ id?: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInformation id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MoviePage;
