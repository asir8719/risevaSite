import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/layout/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Technologies from "./pages/Technologies/Technologies";
import Team from "./pages/Team/Team";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Clients from "./pages/Clients/Clients";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
