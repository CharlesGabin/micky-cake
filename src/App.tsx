import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import { Helmet } from "react-helmet";
import Services from "./components/Services";
import About from "./components/About";
import { SocialIcon } from "react-social-icons";

function App() {
  const waNumber = "23796877668";
  const WA_URL = "https://api.whatsapp.com/send?phone=";
  return (
    <main className="relative flex flex-col min-h-screen antialiased">
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
      <div className="sticky top-[80%] left-0 z-50 pl-4 ">
        <a href={WA_URL + waNumber} target="_blank">
          <SocialIcon network="whatsapp"></SocialIcon>
        </a>
      </div>
      <Header />
      <Home />
      <Product />
      <Services />
      <About />
      <Footer />
    </main>
  );
}

export default App;
