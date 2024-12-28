import type { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  demoPrompt: string;
}

export interface ProcessedResult {
  type: 'text' | 'image' | 'list' | 'code';
  content: string | string[];
}