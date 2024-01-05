import React, { useEffect } from "react";

import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

import { useAllSelectors } from "./hooks/useAllSelectors";
import { useAppDispatch } from "./hooks/hooks";
import { getStatistics } from "./redux/bikeThunk";

function App() {
  const { bikesList, error } = useAllSelectors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [bikesList, dispatch]);
  return (
    <div className="h-full flex flex-col">
      <Header />
      {error ? <p>{error}</p> : null}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
