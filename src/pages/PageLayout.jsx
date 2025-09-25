import {Outlet, useParams} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollOnTop.jsx";

export default function PageLayout() {
  const {id} = useParams();
  return (
    <div className="w-full px-10 flex flex-col h-dvh">
      <Header />
      <div className="w-full flex gap-4 flex-1">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1">
          <ScrollToTop />
          <Outlet/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
