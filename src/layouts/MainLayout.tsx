import Footer from "src/core/components/Footer";
import Header from "src/core/components/Header";

const MainLayout = () => (
  <div className="mx-auto flex h-[100vh] w-3/4 flex-col">
    <Header />
    <div className="flex-grow-[1]"></div>
    <Footer />
  </div>
);

export default MainLayout;
