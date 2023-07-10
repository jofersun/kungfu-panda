import React, { useContext } from "react";
import { FC } from "react";
import MovieContext from "../../../MovieContext.tsx";
import "./HeaderCatalogue.css";

export type HeaderProps = {
  title: string;
};

const HeaderCatalogue: FC<HeaderProps> = (props) => {
  const { selectedMovie } = useContext(MovieContext);
  // console.log("selectedMovie", selectedMovie);
  // console.log("HeaderProps", props);
  return (
    <div className="container">
      <img
        src="./camera.png"
        style={{ width: 25, marginRight: 5 }}
        alt=""
      ></img>
      <p className="headerTitle">
        <strong>{selectedMovie ? selectedMovie : props.title}</strong>
      </p>
    </div>
  );
};

export default HeaderCatalogue;
