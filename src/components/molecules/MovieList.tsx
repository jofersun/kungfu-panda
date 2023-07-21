import React, { useContext, useEffect } from "react";
import { FC } from "react";
import { ListItemProps } from "../atoms/ListItem";
import ListItem from "../atoms/ListItem";
import MovieContext from "../../MovieContext";

import { useDispatch } from "react-redux";
import setPageTitle from "../../redux/action";

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};
export type MovieListProps = {
  listItems: MovieData[];
  selectedId: string;
  onSelectedItem?: Function;
};

const MovieList: FC<MovieListProps> = ({
  listItems,
  selectedId,
  onSelectedItem,
}) => {
  // console.log("MovieListProps", props);
  const { setSelectedMovie } = useContext(MovieContext);
  // const dispatch = useDispatch();

  const onMovieSelected = (movieId: string) => {
    console.log("onMovieSelected", movieId);

    // console.log("onSelectedItem", onSelectedItem);
    onSelectedItem && onSelectedItem(movieId);
    const movie = listItems.find((a) => a.id === movieId);

    //using context
    if (setSelectedMovie) {
      // console.log("setSelectedMovie", setSelectedMovie);
      setSelectedMovie(movie?.title ?? "");
    } else console.log("setSelectedMovie is undifined");

    //using redux
    // if (setPageTitle) {
    //   // console.log("setPageTitle", setPageTitle);
    //   dispatch(setPageTitle(movie?.title));
    // } else console.log("setPageTitle is undifined");
  };

  return (
    <div style={{ textAlign: "left" }}>
      {listItems &&
        listItems.map((a: MovieData) => {
          // console.log("a", a);
          return (
            <ListItem
              key={a.id}
              id={a.id}
              title={a.title}
              onSelectedItem={onMovieSelected}
              isSelected={selectedId === a.id}
            />
            // </p>
          );
        })}
    </div>
  );
};

export default MovieList;
