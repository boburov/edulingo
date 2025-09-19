const apiEndpoints = {
  home: "/",

  // admin
  verifyAdmin: "/admin/verify",

  // playlists
  createplaylist: "/playlists/new",
  getPlaylistByName: (unique_name: string) => `/playlists/${unique_name}`,
  getAllPlaylists: "/playlists",

  // lessons
  createNewLesson: (unique_name: string) => `/playlists/${unique_name}/lessons/new`,
  updateLesson: (unique_name: string, id: string) => `/playlists/${unique_name}/lessons/${id}`,
  deleteLesson: (unique_name: string, id: string) => `/playlists/${unique_name}/lessons/${id}`
};

export default apiEndpoints;
