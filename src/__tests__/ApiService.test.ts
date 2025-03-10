// ApiService.test.ts
import { ApiService } from 'ApiService';
import * as randomTimeModule from 'utils/getRandomTime';

describe('ApiService', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest
      .spyOn(randomTimeModule, 'getRandomTime')
      .mockImplementation((min: number, max: number) => min);
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should return an array of bombs after timeout', async () => {
    const promise = ApiService.getBombs();

    jest.advanceTimersByTime(1000);

    // Wait for the promise to resolve.
    const bombs = await promise;

    expect(bombs).toHaveLength(4);

    // Check each bomb object.
    expect(bombs[0]).toEqual({
      id: 1,
      name: 'Bomb A',
      timeLeft: 10,
      exploded: false,
    });
    expect(bombs[1]).toEqual({
      id: 2,
      name: 'Bomb B',
      timeLeft: 10,
      exploded: false,
    });
    expect(bombs[2]).toEqual({
      id: 3,
      name: 'Bomb C',
      timeLeft: 10,
      exploded: false,
    });
    expect(bombs[3]).toEqual({
      id: 4,
      name: 'Bomb D',
      timeLeft: 10,
      exploded: false,
    });
  });
});
