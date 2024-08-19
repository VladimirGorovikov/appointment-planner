import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({elementsToDisplay}) => {
  return (
    <div>
      {elementsToDisplay.map((element, index) => {
        const {name, ...rest} = element;
        return <Tile name={name} description={rest} key={index}/>
      })}
    </div>
  );
};
