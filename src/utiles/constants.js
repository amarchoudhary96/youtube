export const YOUTUBE_API_KEY = "AIzaSyDDkTc650Y3uRPrfN4budQEx9kdSwHdymg"; // Replace this with your actual YouTube API key

export const YOUTUBE_VIDIO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_COMMENT_API = "https://youtube.googleapis.com/youtube/v3/commentThreads"

