import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(( movie, idx ) => {
        return (
          <div className='movie' key={idx}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            
              <p>Genres:</p>
              <ul>{movie.genres.map((g, i) => {
                return <li key={i}>{ g }</li>
              })}</ul>
            
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
