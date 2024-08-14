import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/'); // Redirige vers la page d'accueil
  }, []);

  return null; // Pas de rendu visuel
}

