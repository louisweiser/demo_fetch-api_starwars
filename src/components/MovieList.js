import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

export default function MovieList(props) {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
}
