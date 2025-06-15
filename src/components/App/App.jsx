import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";

import css from "../App/App.module.css";
import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../Pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() =>
  import("../../Pages/LoginPage/LoginPage")
);
const ContactsPage = lazy(() =>
  import("../../Pages/ContactsPage/ContactsPage")
);

import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.text}>Refreshing user...</p>
  ) : (
    <>
    <Toaster position="top-right" />
    <Suspense fallback={<p className={css.text}>Loading page...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<ContactsPage />}
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  );
}
