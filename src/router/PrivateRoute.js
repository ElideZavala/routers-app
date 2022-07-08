import { Navigate, Route, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const user = null;
// const user = { id: 1, username: "elide" };

export default function PrivateRoute({ element: Element, ...rest }) {
  // const auth = useAuth();
  // const location = useLocation();

  return (
    <div>
      {/* <Route {...rest}>{user ? <Element /> : <Redirect to="/login" />}</Route> */}
    </div>
  );
  //   <Route {...props}></Route>;
}
