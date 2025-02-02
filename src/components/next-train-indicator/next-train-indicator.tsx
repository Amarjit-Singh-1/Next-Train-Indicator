import React from "react";
import { useVirtualClock } from "../../hooks/use-virtual-clock";
import { getNextTrains } from "../../common/utils";
import TrainRow from "../train-row/train-row";
import styles from "./next-train-indicator.module.css";

const NextTrainIndicator: React.FC = () => {
  const virtualTime = useVirtualClock(5 * 60);
  const nextTrains = getNextTrains(virtualTime)?.slice(0, 2);

  return (
    <div className={styles.nextTrainIndicator}>
      <h3>Next Train Arrivals</h3>
      <div className={styles.trainList}>
        {nextTrains?.map((train) => (
          <TrainRow key={train.id} train={train} currentVT={virtualTime} />
        ))}
      </div>
      <div className={styles.virtualTime}>
        Time:{" "}
        {Math.floor(virtualTime / 60)
          .toString()
          .padStart(2, "0")}
        :{(virtualTime % 60).toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default NextTrainIndicator;
