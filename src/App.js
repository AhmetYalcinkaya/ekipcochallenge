import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsByCategory from "./pages/ProductsByCategory";
import ProductDetail from "./pages/productDetail/ProductDetails";
import Favorites from "./pages/favorites/Favorites ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productlist/:id" element={<ProductsByCategory />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
