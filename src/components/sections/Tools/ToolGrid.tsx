import { motion } from 'framer-motion';
import { ToolCard } from './ToolCard';
import type { Tool } from '../../../types/tools';

interface ToolGridProps {
  tools: Tool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <ToolCard tool={tool} />
        </motion.div>
      ))}
    </div>
  );
}