import Header from "./layout/header";
import Footer from "./layout/footer";
import AppRoutes from "./AppRoutes";
import ScrollUp from "@/shared/components/scroll-up";
import { Toaster } from "react-hot-toast";

import "@/shared/styles/globals.scss";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      <ScrollUp />

      {/* Toast system (global) */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "10px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#111",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#111",
            },
          },
        }}
      />
    </div>
  );
}