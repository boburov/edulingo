import api from "./api.service";
import { api_endpoint } from "../api.endpoint";

export const auth_service = {
  register: async (data: { email: string; name: string; surname: string }) => {
    const res = await api.post(api_endpoint.register, data);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    return res.data;
  },
  login: async (email: any) => {
    const res = await api.post(api_endpoint.login, email);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
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

  edit_profile: async (
    data: { name: string; surname: string; email: string },
    user_id: string
  ) => {
    const res = await api.put(api_endpoint.edit_profile(user_id), data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
    });
    return res.data;
  },

  google: async () => {
    const res = await api.get(api_endpoint.google);
    return res.data;
  },

  refresh: async (refresh_token: string) => {
    const res = await api.post(api_endpoint.refresh, { refresh_token });
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    return res.data;
  },

  verifyToken: async () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const res = await api.get(api_endpoint.profile, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return res.data;
      } catch (error) {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          return await auth_service.refresh(refreshToken);
        } else {
          throw new Error("No refresh token found");
        }
      }
    }
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      return await auth_service.refresh(refreshToken);
    }
    throw new Error("No token found");
  }
};
