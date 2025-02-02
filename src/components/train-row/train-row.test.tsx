import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TrainRow from "./train-row";

describe("TrainRow Component", () => {
  it("renders train information correctly", () => {
    render(
      <TrainRow
        train={{
          id: "central-station",
          destination: "Central Station",
          arrivalTime: 320,
        }}
        currentVT={300}
      />
    );

    expect(screen.getByText("Central Station")).toBeInTheDocument();
    expect(screen.getByText("20 min")).toBeInTheDocument();
  });
});
