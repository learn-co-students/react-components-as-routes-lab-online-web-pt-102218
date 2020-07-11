import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {actors.map((actor, i) => {
          return (
            <div key={i}>
            <React.Fragment>
              <h3>Name: {actor.name}</h3>
              <ul>
                <p>Genres:</p>
                {actor.movies.map((movie, i) => {
                  return(
                    <li key={i}>{movie}</li>
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

export default Actors;
