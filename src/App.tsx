import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

// Lazy-loaded components
const Layout = lazy(() => import('./components/layout/Layout'));
const Hero3D = lazy(() => import('./components/sections/Hero/Hero3D'));
const HeroContent = lazy(() => import('./components/sections/Hero/HeroContent'));
const ToolsSection = lazy(() => import('./components/sections/Tools/ToolsSection'));
const ToolPage = lazy(() => import('./pages/tools/[id]'));

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#1A237E] to-[#7B1FA2]">
                  <Hero3D />
                  <HeroContent />
                </section>
                <ToolsSection />
              </Layout>
            }
          />
          <Route path="/tools/:id" element={<ToolPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
