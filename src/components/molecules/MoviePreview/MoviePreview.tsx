import React from "react";
import { FC } from "react";
import Poster from "../../atoms/Poster";
import MovieDetail from "../../atoms/MovieDetail";
import "./MoviePreview.css";

export type MoviePreviewPorps = {
  title: string;
  url: string;
  year: string;
  director: string;
  cast: string;
  genre: string;
};

const MoviePreview: FC<MoviePreviewPorps> = ({title, url, year, director, cast, genre}) => {
  // console.log("MoviePreviewPorps", props);
  return (
    // <div className="media ">
    <div className="media-content">
      <Poster title={title} url={url} />
      <MovieDetail
        title={title}
        year={year}
        director={director}
        cast={cast}
        genre={genre}
      />
    </div>
    // </div>
  );
};

export default MoviePreview;
