import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <React.Fragment>
        <h1>Directors Page</h1>
        {directors.map((director, i) => {
          return (
            <div key={i}>
                <h1>Name: {director.name}</h1>
                <ul>
                  <p>Movies:</p>
                  {director.movies.map((movie, i) => {
                    return(
                      <li key={i}>{movie}</li>
                    )}
                  )}
                </ul>
            </div>
          )
        })}
      </React.Fragment>
    </div>
  );
}

export default Directors
