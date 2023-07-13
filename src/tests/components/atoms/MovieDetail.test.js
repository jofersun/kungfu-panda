import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import MovieDetail from "../../../components/atoms/MovieDetail";

const testMovie = {
  id: "title1",
  title: "Kung Fu Panda",
  year: "2008",
  director: "Mark Osborne",
  casts: "Jack Black, Jackie Chan",
  genre: "Action, Comedy",
  poster: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
};

describe("Movie Detail test!", () => {
  test("Load detail correctly", () => {
    render(
      <MovieDetail
        cast={testMovie.casts}
        director={testMovie.director}
        genre={testMovie.genre}
        title={testMovie.title}
        year={testMovie.year}
      ></MovieDetail>
    );

    expect(screen.getAllByText(/Kung Fu Panda/i)).toHaveLength(1);
    expect(screen.getAllByText(/Mark Osborne/i)).toHaveLength(1);
    expect(screen.getAllByText(/Jack Black, Jackie Chan/i)).toHaveLength(1);
    expect(screen.getAllByText(/Action, Comedy/i)).toHaveLength(1);
  });
});
