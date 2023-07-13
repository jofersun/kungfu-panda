import React, { useContext } from "react";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Movielist from "../../../components/molecules/MovieList";
import DataMovieList from "../../../data/DataMovie.json";

describe("Movie List test!", () => {
  test("Load list correctly", () => {
    // const a = 1;
    // expect(a).toBe(1);

    const [selectedMovieId, setSelectedMovieId] = useState("");
    render(
      <Movielist
        listItems={DataMovieList}
        onSelectedItem={setSelectedMovieId}
        selectedId={selectedMovieId}
      ></Movielist>
    );

    expect(screen.getAllByText(/Kung Fu Panda/i)).toHaveLength(1);
    expect(screen.getAllByText(/Mark Osborne/i)).toHaveLength(1);
    expect(screen.getAllByText(/Jack Black, Jackie Chan/i)).toHaveLength(1);
    expect(screen.getAllByText(/Action, Comedy/i)).toHaveLength(1);
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
