import React from "react";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { routes } from "./Constant";
import { HomePage, SignInPage, SignUpPage } from "./pages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AddBike } from "./pages/AddBikePage";
import PrivateRout from "./Components/Routes/PrivateRout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.SignIn} element={<SignInPage />} />
        <Route path={routes.SignUp} element={<SignUpPage />} />
        <Route
          path={routes.AddBike}
          element={
            <PrivateRout navigate={routes.Home}>
              <AddBike />
            </PrivateRout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
