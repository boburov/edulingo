export const api_endpoint = {
  register: "/auth/register",
  login: "/auth/login",
  verify: "/auth/verify",
  profile: "/auth/profile",
  google: "auth/google",
  edit_profile: (user_id: string) => `/users/${user_id}`,
};
