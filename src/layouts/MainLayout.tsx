import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div className="p-4 h-[100vh] w-3/4 mx-auto bg-slate-200 flex flex-col">
    <Header />
    <div className="flex-grow-[1]">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default MainLayout;
