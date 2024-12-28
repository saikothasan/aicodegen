import { ChangeEvent } from 'react';

interface ToolInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  label?: string;
}

export function ToolInput({ value, onChange, placeholder, label = 'Enter your prompt:' }: ToolInputProps) {
  return (
    <div>
      <label className="mb-2 block text-lg text-white">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/5 p-4 text-white placeholder-gray-400 backdrop-blur-lg"
        rows={4}
      />
    </div>
  );
}