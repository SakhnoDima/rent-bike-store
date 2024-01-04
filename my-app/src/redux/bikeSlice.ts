import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";

import { addBike, getBikesList, getStatistics, removeBike } from "./bikeThunk";
import { ICard } from "../dto/dto";

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
        state.list = [...action.payload];
        state.isLoading = false;
      })
      .addCase(addBike.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(removeBike.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBike.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (bike) => bike._id !== action.payload._id
        );
        state.isLoading = false;
      })
      .addCase(getStatistics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const bikeSliceReducer = bikeSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
