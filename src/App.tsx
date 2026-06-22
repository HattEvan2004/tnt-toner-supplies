import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStrip from "./components/BrandStrip";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import FeaturedProduct from "./components/FeaturedProduct";
import Services from "./components/Services";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <WhyChoose />
        <About />
        <FeaturedProduct />
        <Services />
        <Sustainability />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
