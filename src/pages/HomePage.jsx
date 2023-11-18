import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Articles from "../components/Articles";
import Navbar from "../components/Navbar";
import "../css_for_components/modal.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Articles />
      <Footer />
    </>
  );
}
