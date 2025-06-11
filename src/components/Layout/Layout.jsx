import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "../Layout/Layout.module.css";

export default function Layout() {
  return (
    <div className={css.layout}>
      <AppBar />
        <Suspense fallback={<p>Loading page...</p>}>
          <div className={css.content}>
            <Outlet />
          </div>
        </Suspense>
    </div>
  );
}