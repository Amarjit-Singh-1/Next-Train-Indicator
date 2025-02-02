import { trainFrequencies } from "./constants";

export interface Train {
  destination: string;
  arrivalTime: number; // In virtual minutes
}

export const getNextTrains = (currentVT: number): Train[] => {
  let upcomingTrains: Train[] = [];

  trainFrequencies.forEach(({ destination, interval, startTime }) => {
    for (let time = startTime; time < 24 * 60; time += interval) {
      if (time >= currentVT) {
        upcomingTrains.push({ destination, arrivalTime: time });
      }
    }
  });

  return upcomingTrains
    .sort((a, b) => a.arrivalTime - b.arrivalTime)
    .filter((train) => train.arrivalTime < currentVT + 15);
};
