import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDIO_API } from "../utiles/constants";
import VidioCard from "./VidioCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateinfo } from "../utiles/watchSlice";
import { updatechannelid } from "../utiles/channelidSlice"; // Import the specific action creator
import store from "../utiles/store";

const VidioContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const updatecategory = useSelector((store) => store.category.category);
  console.log(updatecategory);

  const [vidios, setVidios] = useState([]);
  useEffect(() => {
    getVidios();
  }, []);

  const getVidios = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDIO_API);
      const json = await data.json();
      console.log(json);
      setVidios(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleVidioCardClick = (vidio) => {
    dispatch(updateinfo(vidio));
  };

  return (
    <div
      className={`grid sm:grid-cols-3 grid-cols-1 justify-center   ${
        isMenuOpen ? "sm:ml-[250px]" : "sm:ml-[50px]"
      }`}
    >
      {!updatecategory
        ? vidios?.map((vidio) => (
            <Link
              to={`/watch?v=${vidio.id}`}
              key={vidio.id}
              onClick={() => {
                handleVidioCardClick(vidio);
                dispatch(updatechannelid(vidio.snippet.channelId)); // Dispatch the specific action creator
              }}
            >
              <VidioCard info={vidio} />
            </Link>
          ))
        : updatecategory.map((vidio) => (
            <Link
              to={`/watch?v=${vidio.id}`}
              key={vidio.id}
              onClick={() => {
                handleVidioCardClick(vidio);
                dispatch(updatechannelid(vidio.snippet.channelId)); // Dispatch the specific action creator
              }}
            >
              <VidioCard info={vidio} />
            </Link>
          ))}
    </div>
  );
};

export default VidioContainer;
