import React from "react";
import { FC } from "react";

export type MovieDetailProps = {
  title: string;
  year: string;
  director: string;
  cast: string;
  genre: string;
};

const MovieDetail: FC<MovieDetailProps> = (props) => {
  // console.log("MovieDetailProps", props);
  return (
    <div>
      <p>
        <strong>
          {props.title} ({props.year})
        </strong>
        <br />
        <strong>Director: </strong>
        {props.director}
        <br />
        <strong>Casts: </strong>
        {props.cast}
        <br />
        <strong>Genre: </strong>
        {props.genre}
      </p>
    </div>
  );
};

export default MovieDetail;
