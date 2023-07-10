import React from "react";
import { FC, useState } from "react";
import MoviePreview from "../molecules/MoviePreview/MoviePreview.tsx";
import MovieList from "../molecules/MovieList.tsx";
import "./MovieCatalogue.css";

export type MovieCatalogueProps = {
  movieListData: [];
};

const MovieCatalogue: FC<MovieCatalogueProps> = (props) => {
  // console.log("MovieCatalogueProps", props);
  const [selectedMovieId, setSelectedMovieId] = useState(0);
  const selectedMovie = props.movieListData?.find(
    (a) => a.id === selectedMovieId
  );
  // console.log("selectedMovieId: " + selectedMovieId, selectedMovie);

  return (
    <>
      <div className="row">
        <div className="column">
          {selectedMovie ? (
            <MoviePreview
              url={selectedMovie?.imgPath}
              title={selectedMovie?.title}
              year={selectedMovie?.year}
              director={selectedMovie?.director}
              cast={selectedMovie?.casts}
              genre={selectedMovie?.genre}
            />
          ) : null}
        </div>
        <div className="column">
          <MovieList
            listItems={props.movieListData}
            onSelectedItem={setSelectedMovieId}
            selectedId={selectedMovieId}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCatalogue;
