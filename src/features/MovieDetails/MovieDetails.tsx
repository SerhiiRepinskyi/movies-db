import { useParams } from "react-router-dom";
import MovieCardById from "./MovieCardById";
import { useGetMovieByIdQuery } from "../../services/tmdb";
import { Typography, LinearProgress } from "@mui/material";

export default function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();

  const { data: movieDetails, isFetching } = useGetMovieByIdQuery(Number(movieId));

  return (
    <>
      {isFetching && <LinearProgress color="secondary" sx={{ mt: 3 }} />}

      {!isFetching && !movieDetails && <Typography variant="h6">Movie details not available.</Typography>}

      {movieDetails && <MovieCardById movieDetails={movieDetails} />}
    </>
  );
}
