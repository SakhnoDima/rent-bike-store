import { createSelector } from "@reduxjs/toolkit";

import { useAppSelector } from "./hooks";
import { RootState } from "../redux/store";

export const useAllSelectors = () => {
  const bikesList = useAppSelector((state: RootState) => state.bikes.list);
  const isLoading = useAppSelector((state: RootState) => state.bikes.isLoading);
  const formError = useAppSelector((state: RootState) => state.bikes.error);
  const statistics = useAppSelector(
    (state: RootState) => state.bikes.statistics
  );

  // ==
  const tokenSelect = (state: RootState) => state.user.token;
  const isAuthSelect = (state: RootState) => state.user.isAuth;
  const selectIsAuth = createSelector(
    [isAuthSelect, tokenSelect],
    (isAuth: Boolean, token: string) => (token && isAuth ? true : false)
  );
  const isAuth = useAppSelector(selectIsAuth);

  return { bikesList, isLoading, statistics, formError, isAuth };
};
