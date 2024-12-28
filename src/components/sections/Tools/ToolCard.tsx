import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Tool } from '../../../types/tools';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      
      <div className="relative z-10">
        <tool.icon className="mb-4 h-12 w-12 text-white" />
        <h3 className="mb-2 text-2xl font-bold text-white">{tool.name}</h3>
        <p className="mb-6 text-gray-300">{tool.description}</p>
        
        <Link 
          to={`/tools/${tool.id}`}
          className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-[#1A237E] transition-colors hover:bg-white/90"
        >
          Try Now
        </Link>
      </div>
    </motion.div>
  );
}