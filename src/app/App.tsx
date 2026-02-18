import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import AppRoutes from "./AppRoutes";
import ScrollUp from "@/shared/components/ScrollUp";

import "../shared/styles/globals.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />

      <ScrollUp />
    </div>
  );
}
