import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NeedOTO from "./components/NeedOTO/NeedOTO";
import OperatorSection from "./components/OperatorSection/OperatorSection";
import UserSection from "./components/UserSection/UserSection";

function App() {
  return (
    <section>
      <Intro />
      <UserSection />
      <OperatorSection />
      <NeedOTO />
      <Footer />
    </section>
  );
}

export default App;
