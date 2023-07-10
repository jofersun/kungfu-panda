import { createStore } from "redux";
import reducer from "./reducer.tsx";

export type RootState = {
  pageTitle: string;
};

const intialState: RootState = {
  pageTitle: "🎥 Movie Catalogue",
};

const store = createStore(reducer, intialState);

export default store;
