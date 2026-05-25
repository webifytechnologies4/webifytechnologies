import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <Navbar />
      </div>

      <ContactHero />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
