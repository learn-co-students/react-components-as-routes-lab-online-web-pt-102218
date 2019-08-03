import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  return (
    <div> 
      <h1> Movies Page </h1>
      {movies.map((movie, i) => <div>  
        <li key={i}> Title: {movie.title}  </li> 
        <li> Time: {movie.time} </li>
        <ul> Genre: {movie.genres.map((genre, i) => <li> {genre} </li>)} </ul>
        </div> ) }
      </div>
  );
};

export default Movies;
