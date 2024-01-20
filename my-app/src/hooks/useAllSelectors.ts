import { useAppSelector } from "./hooks";
import { RootState } from "../redux/store";

export const useAllSelectors = () => {
  const bikesList = useAppSelector((state: RootState) => state.bikes.list);
  const isLoading = useAppSelector((state: RootState) => state.bikes.isLoading);
  const formError = useAppSelector((state: RootState) => state.bikes.error);
  const statistics = useAppSelector(
    (state: RootState) => state.bikes.statistics
  );

  return { bikesList, isLoading, statistics, formError };
};
