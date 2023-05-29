import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import css from './Cast.module.css';
export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieById(movieId, '/credits').then(res => {
      setCast(res.cast);
    });
  }, [movieId]);

  if (!cast) return <div>Loading...</div>;

  return (
  <ul className={css.list}>
    {cast.map(({ id, profile_path, name, character }) => {
      const imageSrc = profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'https://www.freeiconspng.com/uploads/no-image-icon-0.png';
      return (
        <li key={id} className={css.item}>
          <>
            <img src={imageSrc} alt="" width="375" height="478" />
            <h3>{name}</h3>
            <p className={css.text}>{`Character: ${character}`}</p>
          </>
        </li>
      );
    })}
  </ul>
);
}