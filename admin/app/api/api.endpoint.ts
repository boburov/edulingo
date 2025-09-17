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
};

export default apiEndpoints;
