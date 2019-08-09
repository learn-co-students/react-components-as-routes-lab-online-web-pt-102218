import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          <ol>
            {actor.movies.map(movie =>
              <li className="actor" key={`${actor.name}__${movie}`}>
                {movie}
              </li>
            )}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Actors;
