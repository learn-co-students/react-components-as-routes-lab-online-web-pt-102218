import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,i) => 
        <div key={i}>
          <h5>{director.name}</h5>
          <p>{director.movies.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Directors;
