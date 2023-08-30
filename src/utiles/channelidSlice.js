const { createSlice } = require("@reduxjs/toolkit");

const channelidSlice = createSlice({
  name: "channelid",
  initialState: {
        channelid  :"",
  },
  reducers: {
    updatechannelid: (state, action) => {
       state.channelid=action.payload
    console.log(action.payload);

  },
}
});
export const { updatechannelid} = channelidSlice.actions;
export default channelidSlice.reducer;
