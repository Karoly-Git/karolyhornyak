
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
