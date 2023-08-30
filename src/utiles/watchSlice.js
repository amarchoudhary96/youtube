const { createSlice } = require("@reduxjs/toolkit");

const watchSlice = createSlice({
  name: "info",
  initialState: {
    Info: ""
  },
  reducers: {
    updateinfo: (state, action) => {
      state.Info = {...action.payload};
      
    },
  },
});

export const { updateinfo } = watchSlice.actions;
export default watchSlice.reducer;
