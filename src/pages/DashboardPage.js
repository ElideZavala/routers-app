import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const DashboardPage = () => {
  const auth = useAuth();
  const location = useLocation();
  return (
    <>
      {auth.isLogged() ? (
        <div>
          <h1>DashboardPage</h1>
        </div>
      ) : (
        // <Navigate to={{ pathname: "/login", state: { from: true } }} />
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default DashboardPage;
