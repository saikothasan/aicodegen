import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../../utils/animations';

export function HeroContent() {
  return (
    <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
      <motion.div
        {...fadeIn}
      >
        <h1 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          Next-Gen AI Tools
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200">
          Harness the power of artificial intelligence with our suite of cutting-edge tools.
          Transform your workflow with state-of-the-art AI solutions.
        </p>
        <Link
          to="/tools"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#1A237E] transition-all hover:bg-white/90"
        >
          Explore Tools
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}