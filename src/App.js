// import logo from "./logo.svg";
import "./App.css";
import HeaderCatalogue from "./components/atoms/HeaderCatalogue.tsx";
import MovieCatalogue from "./components/organism/MovieCatalogue.tsx";
import DataMovieList from "./data/DataMovie.json";

function App() {
  console.log("DataMovieList", DataMovieList);
  return (
    <div className="App">
      <HeaderCatalogue title="Movie Catalogue" />
      <MovieCatalogue movieListData={DataMovieList} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
