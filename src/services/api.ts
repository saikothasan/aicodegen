export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`https://api.aicodegen.workers.dev${endpoint}`);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  },

  async post<T>(endpoint: string, body: Record<string, any>): Promise<T> {
    const response = await fetch(`https://api.aicodegen.workers.dev${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  },

  async stream(endpoint: string, body?: Record<string, any>): Promise<string> {
    const response = await fetch(`https://api.aicodegen.workers.dev${endpoint}`, {
      method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    });
    const reader = response.body?.getReader();
    if (!reader) throw new Error('No response body');

    const decoder = new TextDecoder('utf-8');
    let result = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
    }
    return result;
  }
};
