import { ApiService } from 'ApiService';
import { Bomb } from 'components/Bomb/types';
import { useEffect, useState } from 'react';

const useBombsData = () => {
  const [bombs, setBombs] = useState<Bomb[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    ApiService.getBombs()
      .then((bombsFromApi) => {
        setBombs(bombsFromApi);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Return setBombs along with bombs, loading, and error
  return { bombs, setBombs, loading, error };
};

export default useBombsData;
