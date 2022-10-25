import React from "react";

export const Tile = (prop) => {

  const Tile = (prop)=>{
    const preprop = prop.values()
    const listTile = preprop.map((prop, index) => <p className='tile'key={index}>{prop}</p>)
    return listTile
      }

  return (
    <div className="tile-container">
      <p className='tile-title'>{Tile(prop)}</p>
    </div>
  );
};
