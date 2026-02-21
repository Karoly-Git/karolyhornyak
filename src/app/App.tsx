import Header from "./layout/header";
import Footer from "./layout/footer";
import AppRoutes from "./AppRoutes";
import ScrollUp from "@/shared/components/scroll-up";

import "@/shared/styles/globals.scss";
import "./App.scss";

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