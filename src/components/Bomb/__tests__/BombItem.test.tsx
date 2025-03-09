import BombItem from "../BombItem";
import { Bomb } from "../types";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BombItem component", () => {
  it("renders bomb name and contdown when not exploded", () => {
    const bomb: Bomb = { id: 1, name: "Bomb A", timeLeft: 15, exploded: false };
    render(<BombItem bomb={bomb} />);
    expect(screen.getByText("Bomb A")).toBeInTheDocument();
    expect(screen.getByText("15 seconds")).toBeInTheDocument();
  });

  it('renders "Exploded" and applies red text when bomb is exploded', () => {
    const bomb: Bomb = { id: 2, name: "Bomb B", timeLeft: 0, exploded: true };
    render(<BombItem bomb={bomb} />);
    expect(screen.getByText("Bomb B")).toBeInTheDocument();
    const timerElement = screen.getByText("Exploded");
    expect(timerElement).toBeInTheDocument();
    // Check that the color is red
    expect(timerElement).toHaveStyle("color: red");
  });
});
