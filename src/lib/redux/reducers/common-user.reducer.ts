import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CommonUserState {
  name: string;
  phone: string;
}

const initialState: CommonUserState = {
  name: "",
  phone: "",
};

export const commonUser = createSlice({
  name: "commonUser",
  initialState,
  reducers: {
    setCommonUserData: (state, action: PayloadAction<CommonUserState>) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },

    clearCommonUserData: (state) => {
      state.name = initialState.name;
      state.phone = initialState.phone;
    },
  },
});

export const { setCommonUserData, clearCommonUserData } = commonUser.actions;

export default commonUser.reducer;
