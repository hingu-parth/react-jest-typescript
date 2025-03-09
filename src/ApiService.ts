import { getRandomTime } from "utils/getRandomTime";

export class ApiService {
  static getUsers(): Promise<string[]> {
    return new Promise((res) => {
      setTimeout(() => res(["ivan", "ola"]), 1000);
    });
  }
  static getBombs(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mimic fetching bombs data from an API
        const bombs: Bomb[] = [
          {
            id: 1,
            name: "Bomb A",
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
          {
            id: 2,
            name: "Bomb B",
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
          {
            id: 3,
            name: "Bomb C",
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
          {
            id: 4,
            name: "Bomb D",
            timeLeft: getRandomTime(10, 20),
            exploded: false,
          },
        ];
        resolve(bombs);
      }, 1000);
    });
  }
}
