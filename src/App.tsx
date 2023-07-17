// import React, {useState} from "react";
import { FC } from "react";
// import MovieContext from "./MovieContext";
import HeaderCatalogue from "./components/atoms/HeaderCatalogue/HeaderCatalogue";
import MovieCatalogue from "./components/organism/MovieCatalogue";

import { Provider } from "react-redux";

import DataMovieList from "./data/DataMovie.json";
import store from "./redux/store";

import "./App.css";

const App: FC<{}> = () => {
  // const [selectedMovie, setSelectedMovie] = useState("");
  //   console.log("selectedMovie", selectedMovie);
  //   console.log("setSelectedMovie", setSelectedMovie);

  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <HeaderCatalogue title="Header Movie Catalogue" />
          <MovieCatalogue movieListData={DataMovieList} />
        </div>
      </Provider>
      {/* <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      <div className="App">
        <HeaderCatalogue title="Movie Catalogue" />
        <MovieCatalogue movieListData={DataMovieList} />
      </div>
    </MovieContext.Provider> */}
    </div>
  );
};

export default App;
