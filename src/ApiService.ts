import { Bomb } from 'components/Bomb/types';
import { getRandomTime } from 'utils/getRandomTime';

export const ApiService = {
  getBombs: (): Promise<Bomb[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const bombs: Bomb[] = [
          {
            id: 1,
            name: 'Bomb A',
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
          {
            id: 2,
            name: 'Bomb B',
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
          {
            id: 3,
            name: 'Bomb C',
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
          {
            id: 4,
            name: 'Bomb D',
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
        ];
        resolve(bombs);
      }, 1000);
    });
  },
};
