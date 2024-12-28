import { motion } from 'framer-motion';
import ToolCard from './ToolCard';

const tools = [
  {
    title: "AI Text Generator",
    description: "Create compelling content with our advanced language model",
    icon: "text"
  },
  {
    title: "Image Synthesis",
    description: "Generate stunning visuals from textual descriptions",
    icon: "image"
  },
  {
    title: "Voice Assistant",
    description: "Natural language processing for voice interactions",
    icon: "mic"
  }
];

function Tools() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#7B1FA2] to-[#1A237E] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
        >
          Our AI Tools
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;