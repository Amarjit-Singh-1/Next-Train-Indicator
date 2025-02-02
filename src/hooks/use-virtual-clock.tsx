import { useState, useEffect } from "react";

export const useVirtualClock = (initialTime: number) => {
  const [virtualTime, setVirtualTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      //   setVirtualTime((prev) => prev + 1);
      setVirtualTime((prev) => (prev + 1) % (24 * 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return virtualTime;
};
