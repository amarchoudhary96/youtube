const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {
        searchCache:{

        }
  },
  reducers: {
    cacheResults: (state, action) => {
        const payload = action.payload; 
        state.searchCache = { ...state.searchCache, ...payload };
      },
  },
});
export const { cacheResults} = searchSlice.actions;
export default searchSlice.reducer;
