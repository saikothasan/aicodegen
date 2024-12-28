import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { fadeIn } from '../../../utils/animations';

interface ToolFormProps {
  input: string;
  onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
  error: string | null;
  placeholder: string;
}

export function ToolForm({
  input,
  onInputChange,
  onSubmit,
  isProcessing,
  error,
  placeholder
}: ToolFormProps) {
  return (
    <motion.form
      {...fadeIn}
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block text-lg text-white">
          Enter your prompt:
        </label>
        <textarea
          value={input}
          onChange={onInputChange}
          placeholder={placeholder}
          className="w-full rounded-lg bg-white/5 p-4 text-white placeholder-gray-400 backdrop-blur-lg"
          rows={4}
        />
      </div>

      {error && <ErrorMessage message={error} />}

      <button
        type="submit"
        disabled={isProcessing}
        className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[#1A237E] transition-all hover:bg-white/90 disabled:opacity-50"
      >
        {isProcessing ? (
          <>
            <LoadingSpinner />
            Processing...
          </>
        ) : (
          'Generate'
        )}
      </button>
    </motion.form>
  );
}