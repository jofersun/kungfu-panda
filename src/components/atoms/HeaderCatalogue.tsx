import React, { useContext } from "react";
import { FC } from "react";
import MovieContext from "../../MovieContext.tsx";

export type HeaderProps = {
  title: string;
};

const HeaderCatalogue: FC<HeaderProps> = (props) => {
  const { selectedMovie } = useContext(MovieContext);
  // console.log("selectedMovie", selectedMovie);
  // console.log("HeaderProps", props);
  return (
    <div>
      <img
        src="./camera.png"
        style={{ width: 25, marginRight: 5 }}
        alt=""
      ></img>
      <strong style={{ marginBottom: 10 }}>
        {selectedMovie ? selectedMovie : props.title}
      </strong>
    </div>
  );
};

export default HeaderCatalogue;
