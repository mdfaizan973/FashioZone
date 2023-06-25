import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbars from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbars />
      <AllRoutes />
    </div>
  );
}

export default App;
