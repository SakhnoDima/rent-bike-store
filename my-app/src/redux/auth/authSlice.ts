import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authThunk";

type IInitState = {
  email: string;
  isLoading: boolean;
  error: string | null;
};

const initialState: IInitState = {
  email: "",
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.isLoading = false;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
