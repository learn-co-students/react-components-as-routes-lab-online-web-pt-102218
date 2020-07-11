import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => {
        return (
          <div key={idx}>
            <h3>Name: {director.name}</h3>
            <p>Movies:</p>
            <ul>
              {director.movies.map((m, i) => {
                return <li key={i}>{m}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
