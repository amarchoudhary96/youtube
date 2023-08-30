import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utiles/constants";
import VidioCard from "./VidioCard";
import { useSelector } from "react-redux";

const Recommended = ({ id }) => {
  const channelid = useSelector((store) => store.channelid.channelid);
  console.log(channelid);

  const videoId = typeof id === "object" ? id.videoId : id;
  console.log(videoId);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendedVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&type=video&channelId=${channelid}&maxResults=20`
        );
        const data = await response.json();
        console.log("API Response:", data);
        setRecommendedVideos(data.items);
      } catch (error) {
        console.error("Error fetching recommended videos:", error);
      }
    };

    fetchRecommendedVideos();
  }, [videoId]);

  const handleVideoClick = (videoId) => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div className="recommended-videos p-4 hidden sm:inline-block">
      <h2 className="text-lg font-semibold mb-4">Recommended Videos</h2>
      <div className="gap-4">
        {recommendedVideos &&
          recommendedVideos?.map((video) => (
            <div
              className="flex space-y-1 cursor-pointer"
              key={video.id.videoId}
              onClick={() => handleVideoClick(video.id.videoId)}
            >
              {video.snippet && video.snippet.thumbnails && (
                <img
                  className="w-[250px] h-[150px] rounded-[30px] p-5"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
              )}
              {video.snippet && video.snippet.title && (
                <p className="text-sm text-gray-800 text-[10px] pt-5">
                  {video.snippet.title}
                </p>
              )}
              {video.snippet && video.snippet.channelTitle && (
                <p className="text-xs text-gray-500 text-[10px] pt-5">
                  {video.snippet.channelTitle}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recommended;
