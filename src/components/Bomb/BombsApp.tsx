import { useBombs } from "Context";
import { useEffect, useState } from "react";
import BombList from "./BombList";
import { styled } from "styled-components";

const BombsApp = () => {
  const { bombs, setBombs, loading, error } = useBombs();
  const [started, setStarted] = useState<boolean>(false);

  // Determining if all bombs have exploded
  const allExploded = bombs.every((bomb) => bomb.exploded);

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

  const getButtonText = () => {
    if (!started) return "Explode";
    if (allExploded) return "All bombs exploded";
    return "Waiting to explode...";
  };

  const handleBombs = () => setStarted(true);

  if (loading) return <div>Loading bombs...</div>;
  if (error) return <div>Error loading bombs: {error.message}</div>;

  return (
    <Wrapper>
      <BombList bombs={bombs} />
      <Button
        role="button"
        allExploded={allExploded}
        onClick={handleBombs}
        disabled={started && !allExploded}
        aria-valuetext={getButtonText()}
      >
        {getButtonText()}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex: 1;
  gap: 8px;
`;

const Button = styled.button`
  width: 50%;
  border-radius: 6px;
  background: ${(props) => (props.allExploded ? "red" : "purple")};
`;

export default BombsApp;
