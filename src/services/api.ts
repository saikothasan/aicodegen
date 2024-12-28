export const api = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`https://api.aicodegen.workers.dev${endpoint}`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      throw new Error(`Failed to fetch: ${err instanceof Error ? err.message : err}`);
    }
  },

  async post<T>(endpoint: string, body: Record<string, any>): Promise<T> {
    try {
      const response = await fetch(`https://api.aicodegen.workers.dev${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      throw new Error(`Failed to fetch: ${err instanceof Error ? err.message : err}`);
    }
  },

  async stream(endpoint: string, body?: Record<string, any>): Promise<string> {
    try {
      const response = await fetch(`https://api.aicodegen.workers.dev${endpoint}`, {
        method: body ? 'POST' : 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });
      const reader = response.body?.getReader();
      if (!reader) throw new Error('Failed to read response stream');

      const decoder = new TextDecoder('utf-8');
      let result = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
      }
      return result;
    } catch (err) {
      throw new Error(`Failed to fetch: ${err instanceof Error ? err.message : err}`);
    }
  },
};
