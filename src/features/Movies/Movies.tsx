import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie, fetchMovies } from "../../reducers/movies";
import MovieCard from "./MovieCard";

import styles from "./Movies.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";

interface Props {
  movies: Movie[];
  loading: boolean;
}

function Movies({ movies, loading }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <section>
      <div className={styles.list}>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          movies.map((m) => (
            <MovieCard
              key={m.id}
              id={m.id}
              title={m.title}
              overview={m.overview}
              popularity={m.popularity}
              image={m.image}
            />
          ))
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
