import { configureStore } from "@reduxjs/toolkit";
import spootifyReducer from "reduxSlice/spootify";

export default configureStore({
  reducer: {
    spootify: spootifyReducer,
  },
});
