import React, { useState, useEffect } from "react";
import { useVirtualClock } from "../../hooks/use-virtual-clock.tsx";
import { getNextTrains } from "../../common/utils";
import TrainRow from "../train-row/train-row";
import styles from "./new-train-indicator.module.css"; // Import styles

const NextTrainIndicator: React.FC = () => {
  const virtualTime = useVirtualClock(5 * 60); // Start at 05:00 VT
  const nextTrains = getNextTrains(virtualTime).slice(0, 2); // Show only 2 trains

  return (
    <div className={styles.nextTrainIndicator}>
      <h3>Next Train Arrivals</h3>
      <div className={styles.trainList}>
        {nextTrains.map((train, index) => (
          <TrainRow key={index} train={train} currentVT={virtualTime} />
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
