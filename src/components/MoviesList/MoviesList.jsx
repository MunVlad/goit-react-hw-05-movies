import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, name }) => {
        const movieTitle = title || name;
        return (
          <li key={id} className={css.item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              - {movieTitle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
