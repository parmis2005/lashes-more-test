import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import LocationsContact from "@/components/LocationsContact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <LocationsContact />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
