import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = (prop) => {

const infoToDisplay = prop.info; 


  return (
    
    <div>
      <ul>{infoToDisplay.map((contact, i) => { 
return <Tile contact={contact} key={i} />
}
)}</ul>

    </div>
  );
};
