import React, { useState } from "react";
import { FC } from "react";
import MovieContext from "./MovieContext.tsx";
import HeaderCatalogue from "./components/atoms/HeaderCatalogue/HeaderCatalogue.tsx";
import MovieCatalogue from "./components/organism/MovieCatalogue.tsx";

import { Provider } from "react-redux";
import store from "./redux/store.tsx";

import DataMovieList from "./data/DataMovie.json";
import "./App.css";

const App: FC<{}> = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  //   console.log("selectedMovie", selectedMovie);
  //   console.log("setSelectedMovie", setSelectedMovie);

  return (
    <Provider store={store}>
      <div className="App">
        <HeaderCatalogue title="Movie Catalogue" />
        <MovieCatalogue movieListData={DataMovieList} />
      </div>
    </Provider> // <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
    //   <div className="App">
    //     <HeaderCatalogue title="Movie Catalogue" />
    //     <MovieCatalogue movieListData={DataMovieList} />
    //   </div>
    // </MovieContext.Provider>
  );
};

export default App;
