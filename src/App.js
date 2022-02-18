import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Details from "./Components/Details";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import ProductList from "./Components/ProductList";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Details products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
