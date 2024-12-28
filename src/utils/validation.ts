export function validateInput(input: string, minLength = 3): string | null {
  if (!input.trim()) {
    return 'Input is required';
  }
  if (input.trim().length < minLength) {
    return `Input must be at least ${minLength} characters`;
  }
  return null;
}