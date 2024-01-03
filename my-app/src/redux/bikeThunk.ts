import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ICard } from "../Components/Card/Card";

const instance = axios.create({
  baseURL: "https://bike-backend-h9xy.onrender.com/",
});

export const getBikesList = createAsyncThunk<
  ICard[],
  undefined,
  { rejectValue: string | unknown }
>("get/list", async (_, { rejectWithValue }) => {
  try {
    console.log(22);
    const { data } = await instance.get("/bike");
    return data as ICard[];
  } catch (error) {
    return rejectWithValue(error);
  }
});
