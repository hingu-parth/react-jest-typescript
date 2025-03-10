import { styled } from 'styled-components';
import { Bomb, BombTimerProps } from './types';
import BombIcon from 'assets/bomb.icon';

const BombItem = ({ bomb }: { bomb: Bomb }) => {
  return (
    <Wrapper>
      <Container>
        <BombIcon width='2em' height='2em' />
        <BombName>{bomb.name}</BombName>
      </Container>
      <BombTimer $exploded={bomb.exploded}>
        {bomb.exploded ? 'Exploded' : `${bomb.timeLeft} seconds`}
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
  align-items: center;
`;

const BombName = styled.div``;

const BombTimer = styled.div<BombTimerProps>`
  color: ${({ $exploded }) => ($exploded ? 'red' : '')};
`;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export default BombItem;
