import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addfav: (state, action) => {
      const existing = !!state.find((fav) => fav.id === action.payload.id);
      if (!existing) {
        state.push(action.payload);
      }
    },
  },
});

export const { addfav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
