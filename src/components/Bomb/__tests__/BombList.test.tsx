import { render, screen } from "@testing-library/react";
import BombList from "../BombList";
import { Bomb } from "../types";

describe("BombList component", () => {
  it("renders a list of BombItem components", () => {
    const bombs: Bomb[] = [
      { id: 1, name: "Bomb A", timeLeft: 15, exploded: false },
      { id: 2, name: "Bomb B", timeLeft: 0, exploded: true },
    ];
    render(<BombList bombs={bombs} />);
    expect(screen.getByText("Bomb A")).toBeInTheDocument();
    expect(screen.getByText("15 seconds")).toBeInTheDocument();
    expect(screen.getByText("Bomb B")).toBeInTheDocument();
    expect(screen.getByText("Exploded")).toBeInTheDocument();
  });
});
