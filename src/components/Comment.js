import React, { useState, useEffect } from "react";
import { YOUTUBE_COMMENT_API } from "../utiles/constants";
import { YOUTUBE_API_KEY } from "../utiles/constants";

const Comment = ({ id }) => {
  const videoId = typeof id === "object" ? id.videoId : id; 
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const apiUrl = YOUTUBE_COMMENT_API;
      const apiKey = YOUTUBE_API_KEY;

      const url = `${apiUrl}?part=snippet&videoId=${videoId}&key=${apiKey}`;

      try {
        const data = await fetch(url);
        const json = await data.json();

        setComments(
          json.items.map((item) => item.snippet.topLevelComment.snippet)
        );
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [videoId]);

  return (
    <div className="bg-white p-4 rounded-md w-full">
      {comments.map((comment, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={comment.authorProfileImageUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{comment.authorDisplayName}</p>
              <p className="text-gray-600 text-sm">{comment.publishedAt}</p>
            </div>
          </div>
          <p className="mt-2 ml-14 w-[200px]">{comment.textDisplay.slice(0, 50)}</p>
          <div className="flex items-center mt-2">
            <button className="flex items-center text-gray-600 space-x-1">
              <span className="text-xs ml-14 font-medium">
                {comment.likeCount} Like
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
