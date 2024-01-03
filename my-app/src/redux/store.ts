import { Action, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { bikeSliceReducer } from "./bikeSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    bikes: bikeSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
