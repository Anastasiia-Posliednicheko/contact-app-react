import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import css from "../App/App.module.css";
import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegistrationPage from "../../Pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";





export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   return isRefreshing ? (
    <p className={css.text}>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirecTo="/login" component={<ContactsPage />} />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}