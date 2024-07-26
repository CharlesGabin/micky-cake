import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import { Helmet } from "react-helmet";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <main className="flex flex-col min-h-screen antialiased">
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
      <Home />
      <Product />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
