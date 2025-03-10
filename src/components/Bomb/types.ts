export interface Bomb {
  id: number;
  name: string;
  timeLeft: number;
  exploded: boolean;
}
export interface BombTimerProps {
  //Using transient props
  $exploded: boolean;
}
export interface ButtonProps {
  //Using transient props
  $allExploded: boolean;
}
