import React from "react";
// import { useState } from "react";

const ButtonList = () => {
  const ButtonList = [
    { id: 1, name: "All" },
    { id: 2, name: "Music" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "Sunidhi Chauhan" },
    { id: 5, name: "Mixes" },
    { id: 6, name: "News" },
    { id: 7, name: "T-series" },
    { id: 8, name: "Jukebox" },
    { id: 9, name: "Indian pop msic" },
    { id: 10, name: "Music Arrangements" },
    // { id: 11, name: "Live" },
  ];

  return (
    <div>
      <ul className="flex m-2 p-4 text-2xl ">
       
        {ButtonList.map((item, index) => (
          <li key={item.id} className="mx-2">
            <button
              style={{
                backgroundColor: index === 0 ? "black" : "lightgray",
                color: index === 0 ? "white" : "black",
              }}
              className="border rounded-md py-1 px-2 font-semibold text-sm"
            >
              {item.name}
            </button>
          </li>
        ))}
 
      </ul>
    </div>
  );
};

export default ButtonList;
