import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStrip from "./components/BrandStrip";
import Products from "./components/Products";
import FeaturedProduct from "./components/FeaturedProduct";
import WhyChoose from "./components/WhyChoose";
import LocalDelivery from "./components/LocalDelivery";
import About from "./components/About";
import Services from "./components/Services";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import OrderForm from "./components/OrderForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <Products />
        <FeaturedProduct />
        <WhyChoose />
        <LocalDelivery />
        <About />
        <Services />
        <Sustainability />
        <Testimonials />
        <OrderForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
