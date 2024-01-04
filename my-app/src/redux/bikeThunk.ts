import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { AppDispatch } from "./store";
import { IFormInitValues, ICard, IStatistics } from "../dto/dto";

const instance = axios.create({
  baseURL: "https://bike-backend-h9xy.onrender.com/",
  headers: {},
});

export const getBikesList = createAsyncThunk<
  ICard[],
  undefined,
  { rejectValue: string | unknown; dispatch: AppDispatch }
>("bikes/getList", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/bike");
    return (await data) as ICard[];
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const addBike = createAsyncThunk<
  ICard,
  IFormInitValues,
  { rejectValue: string | unknown; dispatch: AppDispatch }
>("bikes/addBike", async (bikeInfo, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/bike", bikeInfo);
    return (await data) as ICard;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const removeBike = createAsyncThunk<
  ICard,
  string,
  { rejectValue: string | unknown }
>("bikes/removeBike", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`/bike/${id}`);
    return (await data) as ICard;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const getStatistics = createAsyncThunk<
  IStatistics,
  undefined,
  { rejectValue: string | unknown }
>("bikes/getStatistics", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/bike/info`);
    return (await data) as IStatistics;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
