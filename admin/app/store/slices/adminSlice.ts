import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  validated: Boolean;
  token: string | null;
}

const initialState: AdminState = {
  validated: false,
  token: null,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    validateAdmin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.validated = true;
    },
  },
});

export const { validateAdmin } = AdminSlice.actions;
export default AdminSlice.reducer;
