import Hero from "./components/Hero";
import Footer from "./components/Footer";
import DessertCard from "./components/DessertCard";

export default function App() {
  return (
    <>
      <Hero />
      <DessertCard label="alfajores" image="" price={30} />
      <Footer />
    </>
  );
}
