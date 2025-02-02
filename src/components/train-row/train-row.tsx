import React from "react";
import { Train } from "../../common/utils";
import styles from "./train-row.module.css";

interface TrainRowProps {
  train: Train;
  currentVT: number;
}

const TrainRow: React.FC<TrainRowProps> = ({ train, currentVT }) => {
  return (
    <div className={styles.trainRow} data-testid="train-row">
      <span>{train.destination}</span>
      <span>{train.arrivalTime - currentVT} min</span>
    </div>
  );
};

export default TrainRow;
