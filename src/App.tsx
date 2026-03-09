import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TickerBar from './components/TickerBar';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-hidden relative">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />
        <TickerBar />
        <FeaturesSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
