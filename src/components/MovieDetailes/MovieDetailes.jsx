import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';

import css from './MovieDetailes.module.css';

export default function MovieDetailes() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;
  const { poster_path, title, overview, vote_average } = movie;
  const genres = movie.genres.map(genre => genre.name).join(', ');
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://www.freeiconspng.com/uploads/movie-icon-4.png';

  return (
    <div className={css.container}>
      <Link type="link" to={backLinkLocationRef.current} className={css.item}>
        Go back
      </Link>
      <div className={css.overviewWrap}>
        <img
          src={poster}
          alt=""
          className={css.image}
          width="375"
          height="478"
        />
        <div className={css.overviewInfo}>
          <h1 className={css.titleFirst}>{title}</h1>
          <p>{`User score:  ${vote_average}`}</p>
          <h2 className={css.titleSecond}>Overview</h2>
          <p>{overview}</p>
          <h2 className={css.titleSecond}>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h2 className={css.titleSecond}>Additional information</h2>
        <ul className={css.list}>
          <li>
            <Link type="Link" to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link type="Link" to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loadding ...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}