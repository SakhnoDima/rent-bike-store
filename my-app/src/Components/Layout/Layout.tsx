import React, { Suspense, useEffect } from "react";

import { useAllSelectors } from "../../hooks/useAllSelectors";
import { useAppDispatch } from "../../hooks/hooks";
import { getStatistics } from "../../redux/bikeThunk";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  const { bikesList, error } = useAllSelectors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [bikesList, dispatch]);
  return (
    <div className="h-full flex flex-col">
      <Header />
      {error ? <p>{error}</p> : null}
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
