import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#1A237E]/80 to-[#7B1FA2]/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Brain className="h-8 w-8" />
          <span className="text-xl font-bold">AI Tools</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/tools" className="text-white hover:text-white/80">
            Tools
          </Link>
          <Link to="/pricing" className="text-white hover:text-white/80">
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className="rounded-full bg-white px-4 py-2 font-medium text-[#1A237E] hover:bg-white/90"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}