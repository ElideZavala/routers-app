import { Navigate, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRoute({ element: Element, ...rest }) {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {!auth.isLogged() ? <Element /> : <Navigate to="/dashboard" />}
    </Route>
  );
  //   <Route {...props}></Route>;
}
