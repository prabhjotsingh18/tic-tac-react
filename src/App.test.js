import { render, screen, fireEvent } from "@testing-library/react";
import Game from "./App";

describe("Game", () => {
  test("renders game board", () => {
    render(<Game />);
    const boardElement = screen.getByTestId("game-board");
    expect(boardElement).toBeInTheDocument();
  });

  test("allows players to make moves", () => {
    render(<Game />);
    const squares = screen.getAllByRole("button");

    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");

    fireEvent.click(squares[1]);
    expect(squares[1]).toHaveTextContent("O");

    fireEvent.click(squares[4]);
    expect(squares[4]).toHaveTextContent("X");
  });

  test("displays correct status message", () => {
    render(<Game />);
    const statusElement = screen.getByTestId("status");

    expect(statusElement).toHaveTextContent("Next Turn : X");

    const squares = screen.getAllByRole("button");

    fireEvent.click(squares[0]);
    expect(statusElement).toHaveTextContent("Next Turn : O");

    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    expect(statusElement).toHaveTextContent("winner : X");
  });

});
