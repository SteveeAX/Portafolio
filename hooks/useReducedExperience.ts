import { useEffect, useState } from 'react';

function shouldReduceExperience() {
  if (typeof window === 'undefined') return false;

  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(max-width: 768px)').matches
  );
}

export function useReducedExperience() {
  const [isReducedExperience, setIsReducedExperience] = useState(shouldReduceExperience);

  useEffect(() => {
    const queries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(hover: none)'),
      window.matchMedia('(max-width: 768px)'),
    ];

    const update = () => setIsReducedExperience(shouldReduceExperience());

    queries.forEach((query) => query.addEventListener('change', update));
    return () => queries.forEach((query) => query.removeEventListener('change', update));
  }, []);

  return isReducedExperience;
}
