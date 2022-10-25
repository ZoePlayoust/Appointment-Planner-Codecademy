import React from "react";

export const TileList = (props) => {

  const displayTiles = (props)=>{
    const listTiles = props.map((prop, index) => <li key={index}>{prop}</li>)
    return listTiles
      }
  
  return (
    
    <div>
      <ul>{displayTiles(props)}</ul>
    </div>
  );
};
