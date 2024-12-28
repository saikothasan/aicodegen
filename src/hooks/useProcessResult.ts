import { useState } from 'react';
import type { ProcessedResult } from '../types/tools';
import { validateInput } from '../utils/validation';

export function useProcessResult(processor: (input: string) => Promise<any>) {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<ProcessedResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processInput = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsProcessing(true);
    setError(null);
    
    try {
      const processedResult = await processor(input);
      setResult(processedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    input,
    setInput,
    isProcessing,
    result,
    error,
    processInput
  };
}