import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {refreshUser} from "../../redux/auth/selectors";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import css from "../App/App.module.css";

import Layout from "../../components/Layout/Layout";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "../../components/RestrictedRoute/RestrictedRoute";

import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/HomePage/HomePage";
import RegistrationPage from "../../Pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";





export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}