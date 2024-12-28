import { Brain, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1A237E] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">AI Tools</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Empowering innovation through artificial intelligence
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/tools/prompt-generator">AI Prompt Generator</Link></li>
              <li><Link to="/tools/vector-embedding">Vector Embedding</Link></li>
              <li><Link to="/tools/speech-to-text">Speech to Text</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com" className="hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} AI Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}