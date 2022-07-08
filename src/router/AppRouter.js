import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
// import PublicRoute from "./PublicRoute";
// import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";
import Navbar from "../components/Navbar";
import ProfilePage from "../pages/ProfilePage";
// import CategoriesPage from "../pages/CategoriesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import PaymentsPage from "../pages/PaymentsPage";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile/:username" element={<ProfilePage />} />

          <Route path="categories" element={<Outlet />} />
          <Route
            index
            path="categories/terror"
            element={<h1>Category Terror</h1>}
          />
          <Route path="categories/action" element={<h1>Category Action</h1>} />
          <Route path="categories/anime" element={<h1>Category Anime</h1>} />
          {/* <Route path="categories" element={<CategoriesRouter />} />

          {/* <Route
            // exact={false}
            path="categories"
            element={<CategoriesRouter />}
          /> */}

          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="dashboard" element={<DashboardPage />} />

          <Route path="payments" element={<PaymentsPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="404" element={<NotFoundPage />} />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

// function CategoriesRouter() {
//   <Routes>
//     <Route index path="categories/terror" element={<h1>Category Terror</h1>} />
//     <Route path="categories/action" element={<h1>Category Action</h1>} />
//     <Route path="categories/anime" element={<h1>Category Anime</h1>} />
//     <Route path="*" element={<Navigate to="/404" />} />
//   </Routes>;
// }

// const CategoriesRouter = () => (
//   <Routes>
//     <Route index path="categories/terror" element={<h1>Category Terror</h1>} />
//     <Route path="categories/action" element={<h1>Category Action</h1>} />
//     <Route path="categories/anime" element={<h1>Category Anime</h1>} />
//     <Route path="*" element={<Navigate to="/404" />} />
//   </Routes>
// );
