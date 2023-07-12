import { createContext } from "react";

export type MovieContextType = {
  selectedMovie: string;
  setSelectedMovie: (id: string) => void;
};

const initialContext = {
  selectedMovie: "",
  setSelectedMovie: (id: string) => ({}),
};
const MovieContext =
  createContext<MovieContextType>(initialContext);

export default MovieContext;
