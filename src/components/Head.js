import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utiles/appSlice";
import { YOUTUBE_SEARCH_API } from "../utiles/constants";
import { BiSearchAlt2 } from "react-icons/bi";
import { cacheResults } from "../utiles/searchSlice";

const Head = () => {
  const [searchQuary, setSearchQuary] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchSuggestions();
    const timer = setTimeout(() => {
      if (searchCache[searchQuary]) {
        setShowSuggestions(searchCache[searchQuary]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuary]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuary);
      const json = await data.json();
      dispatch(cacheResults({ [searchQuary]: json[1] }));

      if (Array.isArray(json) && json.length >= 2) {
        const suggestions = json[1];
        setSearchSuggestions(suggestions);
      } else {
        setSearchSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleModeHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex flex-row px-5 py-2 mx-2 items-center justify-between sm:w-full w-[620px] fixed top-0 left-0 bg-white z-50">
      <div className="flex col-span-1 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png"
          alt="menu"
          className="h-8 hidden sm:inline-block"
          onClick={() => toggleModeHandler()}
        />

        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube-logo"
          className="h-16 mx-2 hidden sm:inline-block "
        />
      </div>

      <div className="col-span-10 ">
        <div className="flex items-center sm:hidden w-[600px] gap-5 justify-start  ">
          <img
            src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000"
            alt=""
            className="w-[50px]"
          />
         <div className="h-8 flex">
          <input
            type="text"
            className="w-[130px] border border-gray-400 p-2 rounded-l-xl"
            placeholder="Search"
            value={searchQuary}
            onChange={(e) => setSearchQuary(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 bg-gray-200 p-2 rounded-r-xl flex items-center">
            search
          </button>
        </div>
          <img
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
            alt=""
            className="w-[25px]"
          />
        </div>

        <div className="h-8 hidden sm:inline-block">
          <input
            type="text"
            className="w-[400px] border border-gray-400 p-2 rounded-l-full"
            placeholder="Search"
            value={searchQuary}
            onChange={(e) => setSearchQuary(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 bg-gray-200 p-2 rounded-r-full">
            search
          </button>
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="fixed bg-white w-[400px]  py-2 rounded-lg border border-gray-300 shadow-xl font-medium">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex py-2 items-center gap-4 cursor-pointer hover:bg-gray-200 w-[400px]  pl-4"
              >
                <BiSearchAlt2 />

                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
          alt="profile"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
