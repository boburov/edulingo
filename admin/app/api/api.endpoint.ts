const apiEndpoints = {
  home: "/",

  // admin
  verifyAdmin: "/admin/verify",

  // playlists
  createplaylist: "/playlists/new",
  getPlaylistByName: (unique_name: string) => `/playlists/${unique_name}`,
  getAllPlaylists: "/playlists",
};

export default apiEndpoints;
