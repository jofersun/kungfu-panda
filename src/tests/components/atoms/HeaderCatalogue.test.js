import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../../../redux/store";
import HeaderCatalogue from "../../../components/atoms/HeaderCatalogue/HeaderCatalogue";

describe("Header Catalogue test!", () => {
  test("Load header correctly", () => {
    const title = "this is a title header catalogue";
    const key = 100;

    render(
      <Provider store={store}>
        <HeaderCatalogue title={title} key={key} />
      </Provider>
    );
    expect(
      screen.getAllByText(/this is a title header catalogue/i)
    ).toHaveLength(1);
  });
});
