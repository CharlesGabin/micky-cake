import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Micki Cakes - Le plaisir avec grace</title>
        <link rel="icon" href="/hero-bg.jpg" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
