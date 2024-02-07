import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { AppDispatch } from "../store";
import { userRequestDTO, userResponseDTO } from "../../dto/authDto";

const instance = axios.create({
  baseURL: "http://localhost:5050/auth/",
  headers: {},
});

export const register = createAsyncThunk<
  userResponseDTO,
  userRequestDTO,
  { rejectValue: string | unknown; dispatch: AppDispatch }
>("auth/register", async (user, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("register", user);
    return (await data) as userResponseDTO;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
