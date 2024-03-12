import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
