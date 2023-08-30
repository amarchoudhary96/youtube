const { createSlice } = require("@reduxjs/toolkit");

const categorySlice = createSlice({
  name: "category",
  initialState: {
        category:"",
  },
  reducers: {
    updatecategory: (state, action) => {
       state.category=action.payload
    console.log(state.category);

  },
}
});
export const { updatecategory} = categorySlice.actions;
export default categorySlice.reducer;
