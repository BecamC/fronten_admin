import { useState, useEffect } from "react";
import "../styles/App.css";

const Clock = () => {
  const [ctime, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const UpdateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    // Update time every second
    const intervalId = setInterval(UpdateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <h1 className="clock-display">{ctime}</h1>;
};

export default Clock;

