"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "@/app/features/userSlice";
import { auth_service } from "@/app/api/service/auth.service";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    auth_service
      .profile(token)
      .then((res) => {
        dispatch(setUser(res));
      })
      .catch(() => {
        const refresh_token = localStorage.getItem("refresh_token");
        if (!refresh_token) return dispatch(logout());
        auth_service.refresh(refresh_token).catch(() => {
          dispatch(logout());
          localStorage.removeItem("token");
          localStorage.removeItem("refresh_token");
        });
      });
  }, [dispatch]);
};
