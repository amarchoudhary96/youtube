import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import watchSlice from "./watchSlice";
import categorySlice from "./categorySlice";
import channelidSlice from "./channelidSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    info:watchSlice,
    category:categorySlice,
    channelid:channelidSlice,
  },
});

export default store;
