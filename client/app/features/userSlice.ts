import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  name: string;
  surname: string;
  email: string;
  profile_pic: string;
  role: string;
  courses: [];
  show_history: [];
  created_at?: string;
  is_verified: boolean;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: null,
  name: "",
  surname: "",
  email: "",
  profile_pic: "",
  role: "",
  courses: [],
  show_history: [],
  is_verified: false,
  created_at: undefined,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return {
        ...state,
        ...action.payload,
        courses: action.payload.courses || [],
        isLoggedIn: true,
      };
    },

    logout: () => initialState,
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
