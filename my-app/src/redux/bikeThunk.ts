import { createAsyncThunk } from "@reduxjs/toolkit";

import axios, { AxiosError } from "axios";

import { AppDispatch } from "./store";
import {
  IFormInitValues,
  ICard,
  IStatistics,
  IUpdateBikeStatus,
} from "../dto/dto";
import { BASE_URL } from "../Constant";

const instance = axios.create({
  baseURL: BASE_URL,
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
    return rejectWithValue(error as AxiosError);
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

export const updateBikeStatus = createAsyncThunk<
  ICard,
  IUpdateBikeStatus,
  { rejectValue: string | unknown }
>("bikes/updateBikeStatus", async (updateInfo, { rejectWithValue }) => {
  try {
    const { data } = await instance.patch(`/bike/${updateInfo.id}`, {
      status: updateInfo.status,
    });
    return (await data) as ICard;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
