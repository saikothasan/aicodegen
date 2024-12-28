import { useState } from 'react';
import type { ProcessedResult } from '../types/tools';
import { validateInput } from '../utils/validation';

type UseProcessResultHook = {
  input: string;
  setInput: (value: string) => void;
  isProcessing: boolean;
  result: ProcessedResult | null;
  error: string | null;
  processInput: (e: React.FormEvent) => Promise<void>;
};

export function useProcessResult(
  processor: (input: string) => Promise<ProcessedResult>
): UseProcessResultHook {
  const [input, setInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<ProcessedResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processInput = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    // Validate the input
    const validationError = validateInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      // Process the input and store the result
      const processedResult = await processor(input);
      setResult(processedResult);
    } catch (err) {
      // Handle errors and set error state
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
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
    processInput,
  };
}
