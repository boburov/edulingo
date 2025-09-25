export const api_endpoint = {
  // auth
  register: "/auth/register",
  login: "/auth/login",
  verify: "/auth/verify",
  profile: "/auth/profile",
  google: "auth/google",
  refresh: "auth/refresh",

  // courses
  courses: "/playlists",
  course: (unique_name: string) => `/playlists/${unique_name}`,

  //edit profile
  sendmail_code: "users/verify_mail",
  change_mail: "users/change_mail",

  // vocs
  get_vocs: (lesson_id: string) => `playlists/lessons/${lesson_id}/vocs/all`,

  // lessons
  lessons: (courseId: string) => `/courses/${courseId}/lessons`,
  lesson: (courseId: string, lessonId: string) =>
    `/courses/${courseId}/lessons/${lessonId}`,

  // history
  history: (userId: string) => `history/${userId}`,
  write_history: "history/show",
  edit_profile: (user_id: string) => `/users/${user_id}`,
};
