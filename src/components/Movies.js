import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>{movie.time} minutes</p>
          <ol>
            {movie.genres.map(genre =>
              <li key={`${movie.name}__${genre}`}>
                {genre}
              </li>
            )}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Movies;
