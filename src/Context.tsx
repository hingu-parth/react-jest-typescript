import { Bomb } from 'components/Bomb/types';
import useBombsData from 'hooks/useBombsData';
import { createContext, FC, useContext, useMemo } from 'react';

export interface ContextProps {
  bombs: Bomb[];
  setBombs: React.Dispatch<React.SetStateAction<Bomb[]>>;
  loading: boolean;
  error: Error | null;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const ContextProviderComponent: FC = ({ children }) => {
  // Using custom hook to fetch bombs data
  const bombsData = useBombsData();

  return (
    <Context.Provider value={{ ...bombsData }}>{children}</Context.Provider>
  );
};

// Merged hook to consume the context
export const useBombs = (): ContextProps => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useBombs must be used within a BombsProvider');
  }
  return context;
};
