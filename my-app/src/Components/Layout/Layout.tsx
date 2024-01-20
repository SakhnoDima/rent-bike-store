import React, { Suspense, useEffect } from "react";

import { useAllSelectors } from "../../hooks/useAllSelectors";
import { useAppDispatch } from "../../hooks/hooks";
import { getStatistics } from "../../redux/bikeThunk";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  const { bikesList } = useAllSelectors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [bikesList, dispatch]);
  return (
    <div className="h-full flex flex-col">
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <main className="flex-auto flex">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
};
