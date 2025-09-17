import api from "../api.config";
import apiEndpoints from "../api.endpoint";

const lessonService = {
  create: async (unique_name: string, data: ) => {
    try {
      return api.post(apiEndpoints.verifyAdmin, { password });
    } catch (error) {
      throw error;
    }
  },
};

export default lessonService;
