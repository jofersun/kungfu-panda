import { createStore } from "redux";
import reducer from "./reducer.tsx";

export type RootState = {
  pageTitle: string;
};

const intialState: RootState = {
  pageTitle: "🎥 Movie Catalogue",
};

const store = createStore(reducer, intialState);
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
