import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import PlaylistSlice from "./slices/playlistSlice";

const store = configureStore({
  reducer: {
    admin: adminSlice,
    playlists: PlaylistSlice,
  },
});

export default store;
