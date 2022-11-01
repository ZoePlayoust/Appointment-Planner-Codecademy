import React from "react";

export const Tile = ({contact}) => {

  return (
    <div className="tile-container">
     {Object.values(contact).map((value, i) => { 
      return <p className={i === 0 ? 'tile-title' : 'tile'}>{value}</p>})
      
     }
      
    </div>
  );

};

