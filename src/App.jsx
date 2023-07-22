import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Product from "./pages/product//Product";

function App() { 
  return (
    <div>
      <Navbar />
      <div className="mx-[240px] flex pt-[77px]">
        <SideNav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/product"
            element={<Product />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
