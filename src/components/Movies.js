import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, i) => {
          return (
            <div key={i}>
            <React.Fragment>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <ul>
                <p>Genres:</p>
                {movie.genres.map((genre, i) => {
                  return(
                    <li key={i}>{genre}</li>
                  )}
                )}
              </ul>
            </React.Fragment>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
