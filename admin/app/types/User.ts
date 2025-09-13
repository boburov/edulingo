export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  provider: string;
  provider_id: string;
  created_at: Date;
}

export interface Playlist {
  id: number;
  unique_name: string;
  title: string;
  description: string;
  thumbnail: string;
  created_at: Date;
}
