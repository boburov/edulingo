import api from "./api.service";
import { api_endpoint } from "../api.endpoint";

export const auth_service = {
  register: async (data: { email: string; name: string; surname: string }) => {
    const res = await api.post(api_endpoint.register, data);
    return res.data;
  },
  login: async (email: any) => {
    const res = await api.post(api_endpoint.login, email);
    return res.data;
  },

  verify: async (token: string) => {
    const res = await api.get(api_endpoint.verify + `?token=${token}`);
    return res.data;
  },

  profile: async (token: string) => {
    const res = await api.get(api_endpoint.profile, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

  google: async () => {
    const res = await api.get(api_endpoint.google);
    return res.data;
  },
};
