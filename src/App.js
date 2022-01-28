import AdminSection from "./components/AdminSection/AdminSection";
import BlogSection from "./components/BlogSection/BlogSection";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NeedOTO from "./components/NeedOTO/NeedOTO";
import OperatorSection from "./components/OperatorSection/OperatorSection";
import UserSection from "./components/UserSection/UserSection";
import VehicleSupportSection from "./components/VehicleSupportSection/VehicleSupportSection";
import WhyOTORide from "./components/WhyOTORide/WhyOTORide";
import AOS from "aos";
import "aos/dist/aos.css";
import PaymentInternetSection from "./components/PaymentInternetSection/PaymentInternetSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
function App() {
  AOS.init({ duration: 1000 });
  return (
    <section>
      <Intro />
      <WhyOTORide />
      <UserSection />
      <AdminSection />
      <OperatorSection />
      <VehicleSupportSection />
      <TestimonialSection />
      <BlogSection />
      <PaymentInternetSection />
      <NeedOTO />
      <Footer />
    </section>
  );
}

export default App;
