import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slice";

export default configureStore({
  reducer: {fav:favoriteReducer},
});
