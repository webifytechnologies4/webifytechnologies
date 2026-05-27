import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import SEO from "../../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Webify Technologies" 
        description="Get in touch with Webify Technologies. Send us a message or schedule a consultation with our technology experts to discuss your project."
        keywords="contact webify, tech consulting, software developers contact, hire programmers, tech projects inquiry"
      />
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <Navbar />
      </div>

      <main className="bg-brand-white text-gray-900 overflow-x-hidden w-full">
        <ContactHero />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
