import { Outlet } from "react-router-dom";
import Header from "../components/sharedLayout/Header";
import Footer from "../components/sharedLayout/Footer";

const SharedLayout = () => {
  return (
    <main className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default SharedLayout;
