const MoviePage = async ({ params }: { params: Promise<{ id?: string }> }) => {
  const { id } = await params;

  return <div>movie {id}</div>;
};

export default MoviePage;
