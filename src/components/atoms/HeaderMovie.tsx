import React from "react";
import { FC } from "react";

export type HeaderProps = {
  title: string;
};

const HeaderMovie: FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <img
        src="./camera.png"
        style={{ width: 25, marginRight: 5 }}
        alt=""
      ></img>
      <strong style={{ marginBottom: 10 }}>{title}</strong>
    </div>
  );
};

export default HeaderMovie;
