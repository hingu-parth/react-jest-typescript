import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ApiService } from 'ApiService';
import { ContextProviderComponent } from 'Context';
import { act } from 'react-dom/test-utils';
import BombsApp from '../BombsApp';
import { Bomb } from '../types';

const mockBombs: Bomb[] = [
  { id: 1, name: 'Bomb A', timeLeft: 3, exploded: false },
  { id: 2, name: 'Bomb B', timeLeft: 2, exploded: false },
];

jest.useFakeTimers();

describe('BombsApp component', () => {
  beforeEach(() => {
    //Mocking the API service to return data
    jest
      .spyOn(ApiService, 'getBombs')
      .mockImplementation(() => Promise.resolve(mockBombs));
  });
  afterEach(() => jest.clearAllMocks());

  it('starts countdown and updates bomb state', async () => {
    // Render component wrapped with BombsProvider.
    await act(async () => {
      render(
        <ContextProviderComponent>
          <BombsApp />
        </ContextProviderComponent>
      );
    });
    // Wait for bombs to load.
    const bombA = await screen.findByText(/Bomb A/);
    expect(bombA).toBeInTheDocument();

    const bombB = await screen.findByText(/Bomb B/);
    expect(bombB).toBeInTheDocument();

    // Check initial button text.
    const button = screen.getByRole('button', { name: /Explode/i });
    expect(button).toBeEnabled();

    // Click to start countdown.
    fireEvent.click(button);

    // Advance timers by 1 second.

    await act(async () => {
      await jest.advanceTimersByTime(1000);
    });
    // Bomb B (initial time 2) should now be at 1 second.
    expect(screen.getByText('1 seconds')).toBeInTheDocument();

    // Advance timers by another second.
    await act(async () => {
      await jest.advanceTimersByTime(1000);
    });

    // Bomb B should have exploded.
    expect(screen.getByText('Exploded')).toBeInTheDocument();
    // Bomb A should now show 1 second (from 3 to 1).
    expect(screen.getByText('1 seconds')).toBeInTheDocument();

    // Advance timers further so Bomb A also explodes.
    await act(async () => {
      await jest.advanceTimersByTime(1000);
    });
    // Now, both bombs are exploded.
    const explodedItems = screen.getAllByText('Exploded');
    expect(explodedItems.length).toBe(2);

    // The button text should now display "All bombs exploded".
    expect(
      screen.getByRole('button', { name: /All bombs exploded/i })
    ).toBeInTheDocument();
  });
});
