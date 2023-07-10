import React, { useContext } from "react";
import { FC } from "react";
import MovieContext from "../../../MovieContext.tsx";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.tsx";

import "./HeaderCatalogue.css";

export type HeaderProps = {
  title: string;
};

const HeaderCatalogue: FC<HeaderProps> = (props) => {
  // console.log("HeaderProps", props);

  const pageTitle = useSelector((state: RootState) => state.pageTitle);
  console.log("pageTitle", pageTitle);

  const { selectedMovie } = useContext(MovieContext);
  console.log("selectedMovie", selectedMovie);

  return (
    <div className="container">
      <img
        src="./camera.png"
        style={{ width: 25, marginRight: 5 }}
        alt=""
      ></img>
      <p className="headerTitle">
        {/* <strong>{selectedMovie ? selectedMovie : props.title}</strong> */}
        <strong>{pageTitle ? pageTitle : props.title}</strong>
      </p>
    </div>
  );
};

export default HeaderCatalogue;
