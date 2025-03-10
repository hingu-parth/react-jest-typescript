import { useBombs } from 'Context';
import { useCallback, useEffect, useMemo, useState } from 'react';
import BombList from './BombList';
import { styled } from 'styled-components';
import { ButtonProps } from './types';

const BombsApp = () => {
  const { bombs, setBombs, loading, error } = useBombs();
  const [started, setStarted] = useState<boolean>(false);

  // Determining if all bombs have exploded
  const allExploded = useMemo(
    () => bombs.every((bomb) => bomb.exploded),
    [bombs]
  );

  useEffect(() => {
    if (started && !allExploded) {
      // Updating bomb countdown here
      const timerId = setInterval(() => {
        setBombs((prevBombs) =>
          prevBombs.map((bomb) => {
            if (bomb.exploded) return bomb;
            const newTimeLeft = bomb.timeLeft - 1;
            return newTimeLeft <= 0
              ? { ...bomb, timeLeft: 0, exploded: true }
              : { ...bomb, timeLeft: newTimeLeft };
          })
        );
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [started, allExploded, setBombs]);

  const getButtonText = useCallback(() => {
    if (!started) return 'Explode';
    if (allExploded) return 'All bombs exploded';
    return 'Waiting to explode...';
  }, [started, allExploded]);

  const handleBombs = useCallback(() => setStarted(true), []);

  if (loading)
    return (
      <Wrapper>
        <Loading>Loading bombs...</Loading>
      </Wrapper>
    );

  if (error)
    return (
      <Wrapper>
        <Error>Error loading bombs: {error.message}</Error>
      </Wrapper>
    );

  return (
    <Wrapper>
      <BombList bombs={bombs} />
      <Button
        $allExploded={allExploded}
        onClick={handleBombs}
        disabled={started && !allExploded}
      >
        {getButtonText()}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  margin: auto;
  width: fit-content;
`;

const Button = styled.button<ButtonProps>`
  border-radius: 6px;
  width: 400px;
  margin: 16px;
  padding: 8px;
  color: white;
  border-color: transparent;
  background: ${({ $allExploded }) => ($allExploded ? 'red' : 'purple')};
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: fit-content;
`;

export default BombsApp;
