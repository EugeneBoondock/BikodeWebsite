
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-hidden">
      {/* Absolute background effects */}
      <div className="fixed inset-0 z-[-1] bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Navigation barebones */}
      <header className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center z-10 animate-fade-in">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold font-mono">B</span>
          </div>
          Bikode
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          <a href="https://github.com/EugeneBoondock/Biko" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </nav>
      </header>

      <main className="flex-1 w-full flex flex-col items-center">
        <HeroSection />
        <FeaturesSection />
        <CommunitySection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
