import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../Components/Card/Card";
import { getBikesList } from "./bikeThunk";

type IInitState = {
  statistics: {
    totalBike: number;
    available: number;
    busy: number;
    avg: number;
  };
  list: ICard[];
  isLoading: boolean;
  error: string | null;
};

const initialState: IInitState = {
  statistics: {
    totalBike: 0,
    available: 0,
    busy: 0,
    avg: 0,
  },
  list: [],
  isLoading: false,
  error: " ",
};

export const bikeSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBikesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBikesList.fulfilled, (state, action) => {
        console.log(11);
        state.list = [...action.payload];
        state.isLoading = false;
      });
  },
});

export const bikeSliceReducer = bikeSlice.reducer;
