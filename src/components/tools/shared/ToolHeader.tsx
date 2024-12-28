import { motion } from 'framer-motion';
import type { Tool } from '../../../types/tools';

interface ToolHeaderProps {
  tool: Tool;
}

export function ToolHeader({ tool }: ToolHeaderProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <tool.icon className="h-12 w-12 text-white" />
      <div>
        <h1 className="text-4xl font-bold text-white">{tool.name}</h1>
        <p className="mt-2 text-xl text-gray-200">{tool.description}</p>
      </div>
    </div>
  );
}