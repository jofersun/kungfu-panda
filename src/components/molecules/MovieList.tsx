import React, { useContext } from "react";
import { FC } from "react";
import { ListItemProps } from "../atoms/ListItem.tsx";
import ListItem from "../atoms/ListItem.tsx";
import MovieContext from "../../MovieContext.tsx";

import { useDispatch } from "react-redux";
import setPageTitle from "../../redux/action.tsx";

export type MovieListProps = {
  listItems: ListItemProps[];
  selectedId: number;
  onSelectedItem?: Function;
};

const MovieList: FC<MovieListProps> = (props) => {
  // console.log("MovieListProps", props);
  const { setSelectedMovie } = useContext(MovieContext);
  const dispatch = useDispatch();

  const onMovieSelected = (movieId: number) => {
    console.log("onMovieSelected", movieId);

    props?.onSelectedItem(movieId);
    const movie = props?.listItems.find((a) => a.id === movieId);

    //using context
    if (setSelectedMovie) {
      // console.log("setSelectedMovie", setSelectedMovie);
      setSelectedMovie(movie?.title);
    } else console.log("setSelectedMovie is undifined");

    //using redux
    if (setPageTitle) {
      // console.log("setPageTitle", setPageTitle);
      dispatch(setPageTitle(movie?.title));
    } else console.log("setPageTitle is undifined");
  };

  return (
    <div style={{ textAlign: "left" }}>
      {props?.listItems &&
        props.listItems.map((a) => {
          // console.log("a", a);
          return (
            <p key={a.id}>
              <ListItem
                key={a.id}
                id={a.id}
                title={a.title}
                onSelectedItem={onMovieSelected}
                isSelected={props.selectedId === a.id}
              />
            </p>
          );
        })}
    </div>
  );
};

export default MovieList;
