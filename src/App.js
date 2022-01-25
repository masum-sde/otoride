import AdminSection from "./components/AdminSection/AdminSection";
import BlogSection from "./components/BlogSection/BlogSection";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NeedOTO from "./components/NeedOTO/NeedOTO";
import OperatorSection from "./components/OperatorSection/OperatorSection";
import UserSection from "./components/UserSection/UserSection";
import VehicleSupportSection from "./components/VehicleSupportSection/VehicleSupportSection";

function App() {
  return (
    <section>
      <Intro />
      <UserSection />
      <AdminSection />
      <OperatorSection />
      <VehicleSupportSection />
      <BlogSection />
      <NeedOTO />
      <Footer />
    </section>
  );
}

export default App;
