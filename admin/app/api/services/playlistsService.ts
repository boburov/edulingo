import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { CreatePlaylistData } from "./utils/playlistTypes";

const playlistService = {
  create: (data: CreatePlaylistData) => {
    try {
      return api.post(apiEndpoints.createplaylist, data);
    } catch (error) {
      throw error;
    }
  },

  getAll: () => {
    try {
      return api.get(apiEndpoints.getAllPlaylists);
    } catch (error) {
      throw error;
    }
  },

  getByUniqueName: (unique_name: string) => {
    try {
      return api.get(apiEndpoints.getPlaylistByName(unique_name));
    } catch (error) {
      throw error;
    }
  },
};

export default playlistService;
