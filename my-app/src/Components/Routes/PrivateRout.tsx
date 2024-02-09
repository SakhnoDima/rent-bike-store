import { FC, ReactNode } from "react";

import { useAllSelectors } from "../../hooks/useAllSelectors";
import { Navigate } from "react-router-dom";
import { routes } from "../../Constant";

interface IPrivateRout {
  children: ReactNode;
  navigate?: string;
}

const PrivateRout: FC<IPrivateRout> = ({
  children,
  navigate = routes.Home,
}) => {
  const { isAuth } = useAllSelectors();

  return <>{isAuth ? children : <Navigate to={navigate} />}</>;
};

export default PrivateRout;
