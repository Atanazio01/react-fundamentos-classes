import { useEffect, useState } from 'react';

export default function useLocalState(key, initialValue = 'dark') {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);

    if(storedData) {
      // Se houver algo salvo, retorna...
      return JSON.parse(storedData);
    }

    // Se não houver nada salvo, retorna initialValue...
    return initialValue;
  });

  useEffect(() => {
    // Toda vez que state for alterado, salva no localStorage...
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  // Deixamos o state e o setState acessíveis para
  // quem for usar este hook...
  return [state, setState];
}