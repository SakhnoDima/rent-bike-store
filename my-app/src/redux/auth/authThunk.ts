import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { AppDispatch } from "../store";
import {
  userRequestDTO,
  userResponseDTO,
  userWithTokenDTO,
} from "../../dto/authDto";
import { BASE_URL } from "../../Constant";

const instance = axios.create({
  baseURL: `${BASE_URL}auth/`,
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

export const logIn = createAsyncThunk<
  userWithTokenDTO,
  userRequestDTO,
  { rejectValue: string | unknown; dispatch: AppDispatch }
>("login/register", async (user, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("login", user);
    return (await data) as userWithTokenDTO;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
