import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

function MovieCard({
  id,
  title,
  overview,
  popularity,
  image = "/movies-db/movie-thumb.png",
}: Props) {
  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src={image} alt="Movie thumbnail" />
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <span className={styles.overview}>{overview}</span>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}

export default MovieCard;
