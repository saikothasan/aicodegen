import { motion } from 'framer-motion';
import { ToolGrid } from './ToolGrid';
import { toolsData } from '../../../data/toolsData';

export function ToolsSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#7B1FA2] to-[#1A237E] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            AI Tools Suite
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-200">
            Explore our comprehensive collection of AI-powered tools designed to enhance your productivity
          </p>
        </motion.div>
        <ToolGrid tools={toolsData} />
      </div>
    </section>
  );
}