import React from "react";
import { FC } from "react";
import Poster from "../atoms/Poster.tsx";
import MovieDetail from "../atoms/MovieDetail.tsx";

export type MoviePreviewPorps = {
  title: string;
  url: string;
  year: number;
  director: string;
  cast: string;
  genre: string;
};

const MoviePreview: FC<MoviePreviewPorps> = (props) => {
  // console.log("MoviePreviewPorps", props);
  return (
    <div>
      <div className="row">
        <Poster title={props.title} url={props.url} />
      </div>
      <div className="row">
        <MovieDetail
          title={props.title}
          year={props.year}
          director={props.director}
          cast={props.cast}
          genre={props.genre}
        />
      </div>
    </div>
  );
};

export default MoviePreview;
