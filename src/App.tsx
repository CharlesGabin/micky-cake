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
        <link rel="icon" type="image/jpg" href="/hero-bg.jpg" />
        <meta
          property="og:title"
          content="Micki Cakes - Le plaisir avec grace"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-bg.jpg" />
        <meta property="og:url" content="https://micky-cake.vercel.app/" />
        <meta name="robots" content="index, follow" />
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
