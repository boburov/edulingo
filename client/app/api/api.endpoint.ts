const apiEndpoints = {
  home: "/",

  // auth
  signup: "/auth/signup",
  signin: "auth/singin",
  profile: "/auth/profile",
  resetToken: (token: string) => `/auth/reset/?token=${token}`,
  verify_magic_link: (token: string) => `/auth/verify-token/?token=${token}`,
  google: "/auth/google",

  // organisations
};

export default apiEndpoints;