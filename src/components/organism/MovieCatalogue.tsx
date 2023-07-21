"use client"
import React from "react";
import { FC, useState } from "react";
import MoviePreview from "../molecules/MoviePreview/MoviePreview";
import MovieList from "../molecules/MovieList";
import "./MovieCatalogue.css";

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

export type MovieCatalogueProps = {
  movieListData: MovieData[];
};

const MovieCatalogue: FC<MovieCatalogueProps> = ({ movieListData }) => {
  // console.log("MovieCatalogueProps", props);
  const [selectedMovieId, setSelectedMovieId] = useState<string>(
    movieListData[0].id
  );
  const selectedMovie = movieListData?.find((a) => a.id === selectedMovieId);
  // console.log("selectedMovieId: " + selectedMovieId, selectedMovie);

  return (
    <>
      <div className="row">
        <div className="column">
          {selectedMovie ? (
            <MoviePreview
              url={selectedMovie?.poster}
              title={selectedMovie?.title}
              year={selectedMovie?.year}
              director={selectedMovie?.director}
              cast={selectedMovie?.casts}
              genre={selectedMovie?.genre}
            />
          ) : null}
        </div>
        <div className="column" style={{ backgroundColor: "#eaeaea" }}>
          <MovieList
            listItems={movieListData}
            onSelectedItem={setSelectedMovieId}
            selectedId={selectedMovieId}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCatalogue;
