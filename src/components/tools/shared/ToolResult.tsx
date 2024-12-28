import { motion } from 'framer-motion';

interface ToolResultProps {
  result: string | JSX.Element;
}

export function ToolResult({ result }: ToolResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8 rounded-lg bg-white/5 p-6 backdrop-blur-lg"
    >
      <h2 className="mb-4 text-xl font-semibold text-white">Result:</h2>
      {typeof result === 'string' ? (
        <p className="text-gray-200">{result}</p>
      ) : (
        result
      )}
    </motion.div>
  );
}