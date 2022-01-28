import { Navigate, Outlet } from "react-router-dom";
import Loader from "../../Loader";

const PublicRoute = ({ isLogin }) => {
  return (
    <>
      {isLogin === null ? (
        <Loader />
      ) : isLogin ? (
        <Navigate to="/dashboard" />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoute;
