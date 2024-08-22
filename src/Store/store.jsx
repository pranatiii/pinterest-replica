import { configureStore } from "@reduxjs/toolkit";
import pinterestReducer from "../Store/pinterestSlice";

const store = configureStore({
  reducer: {
    pinterest: pinterestReducer,
  },
});

export default store;
