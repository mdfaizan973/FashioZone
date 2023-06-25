import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbars from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbars />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
