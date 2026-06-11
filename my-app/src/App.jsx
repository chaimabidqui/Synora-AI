import { Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Feature from "./Features";
import Creators from "./Creators";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Contact from "./Contact";
import PrivacyPolicy from './PrivzcyPolicy';
import ScrollToTop from './ScrollToTop'
import ComingSoon from './ComingSoon'
import useSmoothScroll from './SmoothScroll'

function App() {
  useSmoothScroll();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Feature />
            <Creators />
            <Stats />
            <Testimonial />
            <Pricing />
            <FAQ />

          </>
        } />

        <Route path="/contact" element={<Contact />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          <Route path="/dashboard" element={<Contact/>} />
          <Route path="/integrations" element={<ComingSoon />} />
          <Route path="/docs" element={<ComingSoon />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/careers" element={<ComingSoon />} />
          <Route path="/legal" element={<ComingSoon />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
