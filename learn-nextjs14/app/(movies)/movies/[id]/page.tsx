import { Suspense } from "react";
import MovieInformation from "../../../../components/MovieInformation";
import MovieVideos from "../../../../components/MovieVideos";

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
