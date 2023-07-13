import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ListItem from "../../../components/atoms/ListItem";
// import { dummyMovie } from "../../data/dummyMovie";
const testMovie = {
  id: "title1",
  title: "Kung Fu Panda",
  year: "2008",
  director: "Mark Osborne",
  casts: "Jack Black, Jackie Chan",
  genre: "Action, Comedy",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
};

describe("List Item test!", () => {
  test("Load list correctly", () => {
    const onMovieSelected = (movieId) => {
      console.log("onMovieSelected test", movieId);
    };
    render(
      <ListItem
        id={testMovie.id}
        title={testMovie.title}
        onSelectedItem={onMovieSelected}
        isSelected={false}
      ></ListItem>
    );

    expect(screen.getAllByText(/Kung Fu Panda/i)).toHaveLength(1);
  });
});
