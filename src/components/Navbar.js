import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Navbar = () => {
  // const user = null;
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active">
            Categories
          </NavLink>
        </li>
        {!auth.isLogged() && (
          <>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="active">
                Register
              </NavLink>
            </li>
          </>
        )}
        {auth.isLogged() && (
          <>
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/payments" activeClassName="active">
                Payments
              </NavLink>
            </li>
            <li>
              <button onClick={auth.logout}>logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
