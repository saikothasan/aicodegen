import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../../layout/Layout';

interface ToolLayoutProps {
  children: ReactNode;
}

export function ToolLayout({ children }: ToolLayoutProps) {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#1A237E] to-[#7B1FA2] flex items-center justify-center py-10">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white/10 p-8 backdrop-blur-lg shadow-lg"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
