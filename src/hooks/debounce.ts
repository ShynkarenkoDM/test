import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay = 300): string {
  const [debounced, setDebpunced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebpunced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
