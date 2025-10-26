import React from "react";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen === false ? null : (
    <div className="p-5 shadow-lg w-52">
      <ul>
        <li className="font-bold">Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold my-2">You</h1>
      <ul className="">
        <li>History</li>
        <li>Playlist</li>
        <li>Your Videos</li>
        <li>Your Movies</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};
export default Sidebar;
