import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  validated: Boolean;
}

const initialState: AdminState = {
  validated: false,
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    validateAdmin: (state, action: PayloadAction<Boolean>) => {
      state.validated = action.payload;
    },
  },
});

export const { validateAdmin } = AdminSlice.actions;
export default AdminSlice.reducer;
