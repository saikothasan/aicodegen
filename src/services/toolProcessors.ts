import { api } from './api'; // Assuming API helper functions are in a shared module

export const toolProcessors = {
  'prompt-generator': async (input: string): Promise<string> => {
    const response = await api.get<string>(`/prompt/?prompt=${encodeURIComponent(input)}`);
    return response;
  },

  'vector-embedding': async (input: string): Promise<string> => {
    const response = await api.post<{ input: string; embeddings: number[] }>('/baai', {
      input
    });
    return `Embeddings: ${response.embeddings.join(', ')}`;
  },

  'keyword-generator': async (input: string): Promise<string> => {
    const response = await api.stream(`/keyword/?prompt=${encodeURIComponent(input)}`);
    return response;
  },

  'code-generator': async (input: string): Promise<string> => {
    const response = await api.stream('/code', {
      prompt: input
    });
    return response;
  },

  'article-generator': async (input: string): Promise<string> => {
    const response = await api.stream('/ai', {
      prompt: input
    });
    return response;
  },

  'image-classification': async (input: string): Promise<string> => {
    const response = await api.get<string[]>(`/resnet/?imgurl=${encodeURIComponent(input)}`);
    return `Classified objects: ${response.join(', ')}`;
  },

  'text-classification': async (input: string): Promise<string> => {
    const response = await api.get<string>(`/classification/?textprompt=${encodeURIComponent(input)}`);
    return `Classification result: ${response}`;
  },

  'text-to-image': async (input: string): Promise<string> => {
    const response = await api.get<string>(`/image/?imgprompt=${encodeURIComponent(input)}`);
    return `Generated Image URL: ${response}`;
  },

  'translation': async (input: string): Promise<string> => {
    const response = await api.post<{ translated_text: string }>('/translate', {
      text: input,
      source_lang: 'en',
      target_lang: 'es'
    });
    return `Translated text: ${response.translated_text}`;
  },

  'speech-to-text': async (input: string): Promise<string> => {
    const response = await api.get<string>(`/whisper/?audio_url=${encodeURIComponent(input)}`);
    return `Transcribed text: ${response}`;
  }
};
