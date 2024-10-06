import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../authStore.ts";

const PrivateRoute = () => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
