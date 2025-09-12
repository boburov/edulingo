import api from "../api.config";
import apiEndpoints from "../api.endpoint";

const validationService = {
  verify_admin: async (password: string) => {
    try {
      return api.post(apiEndpoints.verifyAdmin, { password });
    } catch (error) {
      throw error;
    }
  },
};

export default validationService;
