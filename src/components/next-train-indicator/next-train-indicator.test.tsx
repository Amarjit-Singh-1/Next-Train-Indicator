import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NextTrainIndicator from "./next-train-indicator";
import { useVirtualClock } from "../../hooks/use-virtual-clock";

jest.mock("../../hooks/use-virtual-clock", () => ({
  useVirtualClock: jest.fn(),
}));

describe("NextTrainIndicator Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with initial train data", () => {
    (useVirtualClock as jest.Mock).mockReturnValue(300);
    render(<NextTrainIndicator />);

    expect(screen.getByText("Next Train Arrivals")).toBeInTheDocument();
    expect(screen.getByText("Time: 05:00")).toBeInTheDocument();
  });

  it("updates displayed trains based on virtual time", () => {
    (useVirtualClock as jest.Mock).mockReturnValue(420);
    render(<NextTrainIndicator />);

    expect(screen.getByText("Time: 07:00")).toBeInTheDocument();
  });

  it("only displays up to two trains at a time", () => {
    (useVirtualClock as jest.Mock).mockReturnValue(500);
    render(<NextTrainIndicator />);

    const trainRows = screen.getAllByTestId("train-row");
    expect(trainRows.length).toBeLessThanOrEqual(2);
  });
});
