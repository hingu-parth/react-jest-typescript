import { styled } from "styled-components";
import { Bomb } from "./types";

const BombItem: React.FC<Bomb[]> = ({ bomb }) => {
  return (
    <Wrapper>
      <BombName>{bomb.name}</BombName>
      <BombTimer exploded={bomb.exploded}>
        {bomb.exploded ? "Exploded" : `${bomb.timeLeft} seconds`}
      </BombTimer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid grey;
`;

const BombName = styled.div``;

const BombTimer = styled.div`
  color: ${(props) => (props.exploded ? "red" : "")};
`;

export default BombItem;
