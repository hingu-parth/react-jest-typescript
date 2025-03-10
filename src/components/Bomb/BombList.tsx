import { styled } from 'styled-components';
import BombItem from './BombItem';
import { Bomb } from './types';

const BombList = ({ bombs }: { bombs: Bomb[] }) => {
  return (
    <Wrapper>
      {bombs.map((bomb: Bomb) => (
        <BombItem key={bomb.id} bomb={bomb} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 500px;
  justify-content: center;
  padding: 16px;
  border: 1px solid lightgrey;
  border-radius: 6px;
`;

export default BombList;
