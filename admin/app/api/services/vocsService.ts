import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { CreateVocData } from "./utils/vocsTypes";

const vocsService = {
  create: async (lesson_id: string, data: CreateVocData) => {
    try {
      return await api.post(apiEndpoints.createVocs(lesson_id), data);
    } catch (error) {
      throw error;
    }
  },

  get: async (lesson_id: string) => {
    try {
      return await api.get(apiEndpoints.getVocs(lesson_id));
    } catch (error) {
      throw error;
    }
  },
};

export default vocsService;
