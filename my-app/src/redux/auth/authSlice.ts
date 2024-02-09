import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./authThunk";

type IInitState = {
  email: string;
  token: string;
  isLoading: boolean;
  error: string | null;
  isAuth: Boolean;
};

const initialState: IInitState = {
  email: "",
  token: "",
  isLoading: false,
  error: "",
  isAuth: false,
};

const rejectedAuthCase = () => ({ ...initialState });

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
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(logIn.rejected, rejectedAuthCase);
  },
});

export const authSliceReducer = authSlice.reducer;
