import { trainFrequencies } from "./constants";

export interface Train {
  id: string;
  destination: string;
  arrivalTime: number;
}

export const getNextTrains = (currentVT: number): Train[] => {
  let upcomingTrains: Train[] = [];

  trainFrequencies.forEach(({ id, destination, interval, startTime }) => {
    for (let time = startTime; time < 24 * 60; time += interval) {
      if (time >= currentVT) {
        upcomingTrains.push({ id, destination, arrivalTime: time });
      }
    }
  });

  return upcomingTrains
    .sort((a, b) => a.arrivalTime - b.arrivalTime)
    .filter((train) => train.arrivalTime < currentVT + 15);
};
