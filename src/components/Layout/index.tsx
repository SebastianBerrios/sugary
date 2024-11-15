import { Outlet } from "react-router-dom";
import PageHeader from "../PageHeader";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <PageHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
