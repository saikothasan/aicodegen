import {
  MessageSquare,
  Network,
  Mic,
  Languages,
  Image as ImageIcon,
  Tags,
  FileText,
  Code,
  KeyRound,
  Brain
} from 'lucide-react';
import type { Tool } from '../types/tools';

export const toolsData: Tool[] = [
  {
    id: 'prompt-generator',
    name: 'AI Prompt Generator',
    description: 'Generate creative and effective prompts for various AI models',
    icon: MessageSquare,
    demoPrompt: 'Generate a creative writing prompt about a future society'
  },
  {
    id: 'vector-embedding',
    name: 'AI Vector Embedding',
    description: 'Convert text into meaningful vector representations for semantic analysis',
    icon: Network,
    demoPrompt: 'Convert this text into a vector representation'
  },
  {
    id: 'speech-to-text',
    name: 'AI Speech to Text',
    description: 'Convert spoken words into written text with high accuracy',
    icon: Mic,
    demoPrompt: 'Convert audio to text'
  },
  {
    id: 'translation',
    name: 'AI Translation',
    description: 'Translate text between multiple languages with context awareness',
    icon: Languages,
    demoPrompt: 'Translate this text to Spanish'
  },
  {
    id: 'text-to-image',
    name: 'AI Text to Image',
    description: 'Generate images from textual descriptions',
    icon: ImageIcon,
    demoPrompt: 'Create an image of a sunset over mountains'
  },
  {
    id: 'text-classification',
    name: 'AI Text Classification',
    description: 'Categorize text into predefined classes',
    icon: Tags,
    demoPrompt: 'Classify the sentiment of this text'
  },
  {
    id: 'image-classification',
    name: 'AI Image Classification',
    description: 'Identify objects and scenes in images',
    icon: ImageIcon,
    demoPrompt: 'Classify the objects in this image'
  },
  {
    id: 'article-generator',
    name: 'AI Article Generator',
    description: 'Generate well-structured articles on any topic',
    icon: FileText,
    demoPrompt: 'Write an article about renewable energy'
  },
  {
    id: 'code-generator',
    name: 'AI Code Generator',
    description: 'Generate code snippets and boilerplate',
    icon: Code,
    demoPrompt: 'Generate a React component for a button'
  },
  {
    id: 'keyword-generator',
    name: 'AI Keyword Generator',
    description: 'Extract and generate relevant keywords from text',
    icon: KeyRound,
    demoPrompt: 'Generate keywords for an article about AI'
  }
];