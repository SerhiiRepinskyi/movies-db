import { MovieDetailsById, useGetConfigurationQuery } from "../../services/tmdb";
import { Container, Grid, Typography } from "@mui/material";

interface Props {
  movieDetails: MovieDetailsById;
}

const MovieCardById = ({ movieDetails }: Props) => {
  const { title, release_date, vote_average, tagline, overview, genres, poster_path, production_countries, runtime } = movieDetails;

  const { data: configuration } = useGetConfigurationQuery();
  function formatImageUrl(imagePath?: string | null) {
    return imagePath && configuration ? `${configuration.images.base_url}w342${imagePath}` : undefined;
  }

  const releaseDate = new Date(release_date);
  const releaseTime = releaseDate.getTime();
  const releaseYear = isNaN(releaseTime) ? "Unknown" : releaseDate.getFullYear();
  const dateFormat = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const releaseFormatted = isNaN(releaseTime) ? "No release date information" : dateFormat.format(releaseDate);

  const userScore = vote_average ? `${(vote_average * 10).toFixed(0)}%` : "Not rated yet";

  const productionCountries =
    production_countries.length > 0
      ? production_countries.map((country) => country.iso_3166_1).join(", ")
      : "Country information not provided";

  function formatRuntime(runtimeInMinutes: number) {
    const hours = Math.floor(runtimeInMinutes / 60);
    const minutes = runtimeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }
  const runtimeFormatted = runtime ? formatRuntime(runtime) : "No runtime information";

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <img
            src={poster_path ? formatImageUrl(poster_path) : "/movies-db/spilled-popcorn-red-cloth.jpg"}
            alt="Movie Poster"
            style={{ width: "100%", maxWidth: "342px", height: "auto" }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            {title ?? "Unknown"} ({releaseYear})
          </Typography>

          <Typography paragraph>
            {releaseFormatted} • ({productionCountries}) • {runtimeFormatted}
          </Typography>

          <Typography paragraph>User score: {userScore}</Typography>

          <Typography paragraph sx={{ fontStyle: "italic" }}>
            {tagline}
          </Typography>

          {overview && (
            <>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                Overview
              </Typography>
              <Typography paragraph>{overview}</Typography>
            </>
          )}

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Genres
          </Typography>

          <Typography paragraph>{genres.map((genre) => genre.name).join(", ")}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieCardById;
