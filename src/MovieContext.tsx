import { createContext } from "react";

export type MovieContextType = {
  selectedMovie: string;
  setSelectedMovie: () => void;
};

const initialContext = {
  selectedMovie: "",
  setSelectedMovie: () => ({}),
};
const MovieContext: MovieContextType =
  createContext<MovieContextType>(initialContext);

export default MovieContext;
