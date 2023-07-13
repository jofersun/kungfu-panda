import React from "react";
import { FC } from "react";

export type ListItemProps = {
  id: string;
  title: string;
  isSelected?: boolean;
  onSelectedItem?: Function;
};

const ListItem: FC<ListItemProps> = (props) => {
  // console.log("ListItemProps", props);
  return (
    <li
      // id={"listItem_" + props.id}
      onClick={() => {
        // console.log(
        //   "onClick",
        //   props,
        //   "onSelectedItem is " + (props.onSelectedItem === undefined) + " null"
        // );
        if (props.onSelectedItem) props.onSelectedItem(props.id);
      }}
      style={{
        background: props.isSelected ? "#ccc" : "transparent",
        fontWeight: props.isSelected ? "bold" : "normal",
      }}
    >
      {props.title}
    </li>
  );
};

export default ListItem;
