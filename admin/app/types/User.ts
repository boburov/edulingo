export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  provider: string;
  provider_id: string;
  created_at: Date;
}

export interface Playlist {
  id: string;
  unique_name: string;
  title: string;
  description: string;
  thumbnail: string;
  created_at: Date;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  video_url: string;
  title: string;
  description: string;
  order: number;
  playlistId: string;
  vocabulary: Vocs[];
  created_at: Date;
}

export interface Vocs {
  id: string;
  word: string;
  translation: string;
  lessonId: string;
}
