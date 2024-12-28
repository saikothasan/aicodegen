import { motion } from 'framer-motion';
import type { ProcessedResult } from '../../../types/tools';
import { fadeIn } from '../../../utils/animations';

interface ToolResultDisplayProps {
  result: ProcessedResult;
}

export function ToolResultDisplay({ result }: ToolResultDisplayProps) {
  return (
    <motion.div
      {...fadeIn}
      className="mt-8 rounded-lg bg-white/5 p-6 backdrop-blur-lg"
    >
      <h2 className="mb-4 text-xl font-semibold text-white">Result:</h2>
      
      {result.type === 'image' && (
        <img 
          src={result.content as string} 
          alt="Generated result" 
          className="rounded-lg"
        />
      )}
      
      {result.type === 'text' && (
        <p className="text-gray-200">{result.content as string}</p>
      )}
      
      {result.type === 'list' && (
        <ul className="list-inside list-disc space-y-2">
          {(result.content as string[]).map((item, i) => (
            <li key={i} className="text-gray-200">{item}</li>
          ))}
        </ul>
      )}
      
      {result.type === 'code' && (
        <pre className="overflow-x-auto rounded bg-black/30 p-4">
          <code className="text-sm text-gray-200">{result.content as string}</code>
        </pre>
      )}
    </motion.div>
  );
}