import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero3D } from './components/sections/Hero/Hero3D';
import { HeroContent } from './components/sections/Hero/HeroContent';
import { ToolsSection } from './components/sections/Tools/ToolsSection';
import { ToolPage } from './pages/tools/[id]';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <Layout>
            <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#1A237E] to-[#7B1FA2]">
              <Hero3D />
              <HeroContent />
            </section>
            <ToolsSection />
          </Layout>
        } />
        <Route path="/tools/:id" element={<ToolPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
