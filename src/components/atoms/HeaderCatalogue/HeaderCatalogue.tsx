import React, { useContext } from "react";
import { FC } from "react";
// import MovieContext from "../../../MovieContext";

// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/store";

import "./HeaderCatalogue.css";

export type HeaderProps = {
  title: string;
};

const HeaderCatalogue: FC<HeaderProps> = (props) => {
  // console.log("HeaderProps", props);

  //using redux
  // const pageTitle = useSelector((state: RootState) => state.pageTitle);
  const pageTitle = props.title;
  // console.log("pageTitle", pageTitle);

  // const { selectedMovie } = useContext(MovieContext);
  // console.log("selectedMovie", selectedMovie);

  return (
    <div className="container">
      <img
        id={"headerIcon"}
        src="./camera.png"
        style={{ width: 25, marginRight: 5 }}
        alt=""
      ></img>
      <p className="headerTitle">
        <strong id={"headerTitle"}>
          {pageTitle ? pageTitle : props.title}
          {/* {selectedMovie ? selectedMovie : props.title} */}
        </strong>
      </p>
    </div>
  );
};

export default HeaderCatalogue;
