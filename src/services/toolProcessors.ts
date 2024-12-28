import { api } from './api'; // Assuming API helper functions are in a shared module

export const toolProcessors = {
  'prompt-generator': async (input: string): Promise<string> => {
    try {
      const response = await api.get<{ data: string }>(`/prompt/?prompt=${encodeURIComponent(input)}`);
      return response.data;
    } catch (error) {
      console.error('Error in prompt-generator:', error);
      throw new Error('Failed to generate prompt');
    }
  },

  'vector-embedding': async (input: string): Promise<string> => {
    try {
      const response = await api.post<{ input: string; embeddings: number[] }>('/baai', { input });
      return `Embeddings: ${response.embeddings.join(', ')}`;
    } catch (error) {
      console.error('Error in vector-embedding:', error);
      throw new Error('Failed to generate vector embeddings');
    }
  },

  'keyword-generator': async (input: string): Promise<string> => {
    try {
      const response = await api.stream<string>(`/keyword/?prompt=${encodeURIComponent(input)}`);
      return response; // Assuming the stream is handled appropriately
    } catch (error) {
      console.error('Error in keyword-generator:', error);
      throw new Error('Failed to generate keywords');
    }
  },

  'code-generator': async (input: string): Promise<string> => {
    try {
      const response = await api.stream<string>('/code', { prompt: input });
      return response; // Assuming the stream is handled appropriately
    } catch (error) {
      console.error('Error in code-generator:', error);
      throw new Error('Failed to generate code');
    }
  },

  'article-generator': async (input: string): Promise<string> => {
    try {
      const response = await api.stream<string>('/ai', { prompt: input });
      return response; // Assuming the stream is handled appropriately
    } catch (error) {
      console.error('Error in article-generator:', error);
      throw new Error('Failed to generate article');
    }
  },

  'image-classification': async (input: string): Promise<string> => {
    try {
      const response = await api.get<string[]>(`/resnet/?imgurl=${encodeURIComponent(input)}`);
      return `Classified objects: ${response.join(', ')}`;
    } catch (error) {
      console.error('Error in image-classification:', error);
      throw new Error('Failed to classify image');
    }
  },

  'text-classification': async (input: string): Promise<string> => {
    try {
      const response = await api.get<{ classification: string }>(`/classification/?textprompt=${encodeURIComponent(input)}`);
      return `Classification result: ${response.classification}`;
    } catch (error) {
      console.error('Error in text-classification:', error);
      throw new Error('Failed to classify text');
    }
  },

  'text-to-image': async (input: string): Promise<string> => {
    try {
      const response = await api.get<{ imageUrl: string }>(`/image/?imgprompt=${encodeURIComponent(input)}`);
      return `Generated Image URL: ${response.imageUrl}`;
    } catch (error) {
      console.error('Error in text-to-image:', error);
      throw new Error('Failed to generate image');
    }
  },

  'translation': async (input: string): Promise<string> => {
    try {
      const response = await api.post<{ translated_text: string }>('/translate', {
        text: input,
        source_lang: 'en',
        target_lang: 'es'
      });
      return `Translated text: ${response.translated_text}`;
    } catch (error) {
      console.error('Error in translation:', error);
      throw new Error('Failed to translate text');
    }
  },

  'speech-to-text': async (input: string): Promise<string> => {
    try {
      const response = await api.get<{ transcribed_text: string }>(`/whisper/?audio_url=${encodeURIComponent(input)}`);
      return `Transcribed text: ${response.transcribed_text}`;
    } catch (error) {
      console.error('Error in speech-to-text:', error);
      throw new Error('Failed to transcribe speech');
    }
  }
};
