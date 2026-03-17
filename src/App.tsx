/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Showroom from './components/Showroom';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Showroom />
      <Projects />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans bg-[var(--color-black)] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}
