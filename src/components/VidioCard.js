import React from "react";
import { useSelector } from "react-redux";


export function formatViewsCount(viewsCount) {
  if (viewsCount >= 1000000) {
    return (viewsCount / 1000000).toFixed(1) + "M";
  } else if (viewsCount >= 1000) {
    return (viewsCount / 1000).toFixed(1) + "K";
  } else {
    return viewsCount;
  }
}

const VidioCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!info || !info.snippet) {
    return <div>Loading...</div>; // or handle the loading state in a way that fits your UI
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  let formattedViews = null;
  if (statistics && statistics.viewCount) {
    formattedViews = formatViewsCount(statistics.viewCount);
  }

  return (
    <div className={`sm:p-2 my-2 ${isMenuOpen ? "sm:w-[350px]" : "sm:w-[400px] ml-8"} cursor-pointer `}>
      <img className="rounded-lg w-full" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
      <li className="font-bold py-2">{title.slice(0, 40)}</li>
        <li>{channelTitle}</li>
        {formattedViews && <li>{formattedViews} views</li>}
      </ul>
    </div>
  );
};

export default VidioCard;
