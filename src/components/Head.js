import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constan";
const Head = () => {
  const [searchText, SetSearchtext] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [showSuggestion, SetShowSuggestion ] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    console.log(searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    console.log(json[1]);
    SetSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleToggleMenu}
          className="h-12 w-12 hover:bg-gray-200 rounded-full  -mt-1 cursor-pointer"
          alt="menu"
          src="https://getdrawings.com/free-icon-bw/hamburger-menu-icon-9.png"
        />

        <img
          className="h-12 -mt-1"
          alt="logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
      </div>

      <div className="col-span-10  px-10">
        <div>
          <div>
            <input
              placeholder="Search"
              className="border w-2/3 border-gray-400 py-2 px-5  rounded-l-full"
              type="text"
              value={searchText}
              onChange={(e) => SetSearchtext(e.target.value)}
              onFocus={()=>SetShowSuggestion(true)}
              onBlur={()=>SetShowSuggestion(false)}
            />
            <button className="border border-gray-400 rounded-r-full p-2 w-16 bg-gray-50">
              🔍
            </button>
          </div>
          {showSuggestion && (
            <div className="absolute bg-white py-2 px-5 w-[34rem] border border-gray-100 rounded-lg shadow-lg ">
              <ul className="my-1">
                {suggestion.map((s) => (
                  <li className="m-1  py-2 shadow-sm hover:bg-gray-200">{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* <img //Mic Recording
          className="h-10 p-1 mx-2 bg-gray-100 rounded-full hover:bg-gray-200 hover:rounded-full"
          alt="record"
          src="https://cdn-icons-png.freepik.com/256/10278/10278854.png?semt=ais_hybrid"
        /> */}
      </div>

      <div className="col-span-1 flex  ">
        <img
          className=" h-10 mx-4 p-1  hover:bg-gray-200 hover:rounded-full"
          alt="notification-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5NNT9-V31hriLzACMhtUW3Xh_b5USGlLkw&s"
        />

        <img
          className="h-10  mx-4"
          alt="video-icon"
          src="https://i.pinimg.com/564x/96/f4/29/96f429ea8336146cb2f729eb5a8511c8.jpg"
        />
        <img
          className="h-10 ml-4"
          alt="user"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
