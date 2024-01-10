import React from "react";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { routes } from "./Constant";
import { HomePage, SignInPage, SignUpPage } from "./pages";
import { NotFoundPage } from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.SignIn} element={<SignInPage />} />
        <Route path={routes.SignUp} element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
