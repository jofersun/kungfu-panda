import React from "react";
import { FC } from "react";

export type PosterProps = {
  title: string;
  url: string;
};

const Poster: FC<PosterProps> = (props) => {
  // console.log("PosterProps", props);
  return <img src={props.url} alt={props.title} />;
};

export default Poster;
