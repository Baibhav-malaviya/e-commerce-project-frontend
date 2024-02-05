import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: "idle",
  username: "",
  profileImage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail(state, action) {
      //! action.payload = user object
      console.log("action.payload: ____", action.payload);
      const { userName, fullName, profileImage } = action.payload;
      state.username = userName;
      state.profileImage = profileImage;
    },
  },
});

export const { setUserDetail } = userSlice.actions;

export default userSlice.reducer;
