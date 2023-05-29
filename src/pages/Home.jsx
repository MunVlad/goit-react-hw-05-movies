import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MoviesList from 'components/MoviesList/MoviesList';
import moviesApi from 'services/movies-api';

const Title = styled.h2`
  margin-left: 20px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;