import React, { useState, useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utiles/constants";
import { useDispatch, useSelector } from "react-redux";
import { updatecategory } from "../utiles/categorySlice";
// import { fetchCategoryData } from "../redux/actions"; // Import your action creator

const Buttons = ({ list }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        dispatch(updatecategory(data.items)); // Dispatch the action to update the Redux store

      } catch (error) {
        console.error(`Error fetching data for ${category}:`, error);
      }
    };

    if (selectedCategory) {
      fetchData(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div>
      {list.map((button) => (
        <button
          className="px-5 py-2 rounded-xl bg-gray-200 m-2 hidden sm:inline-block"
          key={button}
          onClick={() => setSelectedCategory(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
