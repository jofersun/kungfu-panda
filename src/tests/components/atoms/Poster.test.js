import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Poster from "../../../components/atoms/Poster";

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
    render(
      <Poster
        id={testMovie.id}
        title={testMovie.title}
        url={testMovie.poster}
      ></Poster>
    );
    expect(screen.getAllByAltText(/Kung Fu Panda/i)).toHaveLength(1);
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
