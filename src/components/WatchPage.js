import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utiles/appSlice";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import { formatViewsCount } from "./VidioCard";
import { SlLike } from "react-icons/sl";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatBold } from "react-icons/pi";
import Recommended from "./Recommended";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Info = useSelector((store) => store.info);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex justify-center  ">
      <div className="sm:px-6 px-2 w-full flex flex-col items-center ">
        {searchParams.get("v") && (
          <iframe
            className="w-[350px] h-[250px] sm:w-[800px] sm:h-[500px]"
            // width="800"
            // height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {Info && Info.Info && Info.Info.snippet && (
          <div className="mt-4 flex flex-col gap-4 w-full">
            {Info.Info.snippet.title && (
              <h1 className="text-2xl font-semibold px-2">
                {Info.Info.snippet.title}
              </h1>
            )}

            <div className="flex justify-between px-2">
              <div className="flex items-center mt-1 gap-4">
                <img
                  src={Info.Info.snippet.thumbnails.default.url}
                  alt={`${Info.Info.snippet.channelTitle} Logo`}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-gray-600 ml-2 font-bold text-lg">
                  {Info.Info.snippet.channelTitle}
                </p>
                <button className="px-5 py-2 bg-black text-white rounded-l-full rounded-r-full">
                  subscribe
                </button>
              </div>
              {Info.Info.statistics && (
                <div className="py-3 mt-4   items-center  hidden sm:flex">
                  <div className="flex items-center bg-gray-200 py-2 px-5 rounded-r-full rounded-l-full">
                    <button className="font-medium text-[18px] text-gray-600 flex items-center gap-2">
                      <SlLike />
                      12k
                    </button>
                    <button className="text-[18px] font-medium text-gray-600 ml-6 flex items-center gap-2">
                      <AiOutlineDislike />
                    </button>
                  </div>
                  <button className="text-[18px] font-medium text-gray-600 ml-6 flex items-center gap-2  bg-gray-200 py-2 px-5 rounded-r-full rounded-l-full">
                    <PiShareFatBold /> share
                  </button>
                </div>
              )}
            </div>

            {Info.Info.statistics && (
              <div className="mt-4 bg-gray-200 px-4 rounded-xl w-[320px] sm:w-[800px] ">
                <p className="text-gray-600 mt-1 font-medium text-lg ">
                  {formatViewsCount(Info.Info.statistics.viewCount)} views
                </p>

                <p className="text-gray-800 text-sm font-medium w-full overflow-hidden px-3">
                  {showFullDescription
                    ? Info.Info.snippet.description
                    : Info.Info.snippet.description.slice(0, 300)}
                  {!showFullDescription ? (
                    <button onClick={toggleDescription}>...more</button>
                  ) : (
                    <button onClick={toggleDescription}>...less</button>
                  )}
                </p>
                {!showFullDescription ? (
                  <button
                    className="text-blue-500 mt-2 cursor-pointer"
                    onClick={toggleDescription}
                  >
                    View More
                  </button>
                ) : (
                  <button
                    className="text-blue-500 mt-2 cursor-pointer"
                    onClick={toggleDescription}
                  >
                    View Less
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {Info && searchParams.get("v") && (
          <Comment id={Info.Info.id || searchParams.get("v")} />
        )}
      </div>
      {Info && searchParams.get("v") && (
        <Recommended id={Info.Info.id || searchParams.get("v")}  />
      )}
    </div>
  );
};

export default WatchPage;
