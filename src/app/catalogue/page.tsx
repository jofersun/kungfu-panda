"use client";
import React, { useState } from "react";
import { FC } from "react";
// import MovieContext from "../../MovieContext";
import HeaderCatalogue from "../../components/atoms/HeaderCatalogue/HeaderCatalogue";
import MovieCatalogue from "../../components/organism/MovieCatalogue";

// import { Provider } from "react-redux";

import DataMovieList from "../../data/DataMovie.json";
// import store from "../../redux/store";

import "./catalogue.css";

const Page: FC<{}> = () => {
  // const [selectedMovie, setSelectedMovie] = useState("");
  // console.log("selectedMovie", selectedMovie);

  return (
    <div>
      <HeaderCatalogue title="Movie Catalogue" />
      <MovieCatalogue movieListData={DataMovieList} />
    </div>
  );
};

export default Page;
