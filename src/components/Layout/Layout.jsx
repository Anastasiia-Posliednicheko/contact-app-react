import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";


export default function Layout() {
  return (
    <div>
      <AppBar />
      <main style={{ padding: "20px" }}>
        <Suspense fallback={<p>Loading page...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}