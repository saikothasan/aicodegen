import { motion } from 'framer-motion';
import { ToolCard } from './ToolCard';
import type { Tool } from '../../types/tools';
import { staggerChildren } from '../../utils/animations';

interface ToolGridProps {
  tools: Tool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </motion.div>
  );
}