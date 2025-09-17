import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { CreateLessonData } from "./utils/lessonsTypes";

const lessonService = {
  create: async (unique_name: string, data: CreateLessonData) => {
    try {
      return api.post(apiEndpoints.createNewLesson(unique_name), data);
    } catch (error) {
      throw error;
    }
  },
};

export default lessonService;
