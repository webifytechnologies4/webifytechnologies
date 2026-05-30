import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Services from "./pages/services/index";
import Contact from "./pages/contact/index";
import Projects from "./pages/projects/index";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsConditions from "./pages/termscondition/TermsConditions";
import ScrollToTop from "./components/ScrollToTop";

/* Lenis smooth scroll — wraps the entire app */
import SmoothScrollProvider from "./providers/SmoothScrollProvider";

/* WhatsApp floating chat widget */
import WhatsAppChat from "./components/WhatsAppChat";

function App() {
  return (
    /* SmoothScrollProvider must be the outermost wrapper so Lenis
       captures scroll events before any router or page component */
    <SmoothScrollProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/* WhatsApp widget — fixed bottom-right, visible on every page */}
        <WhatsAppChat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </BrowserRouter>
    </SmoothScrollProvider>
  );
}

export default App;