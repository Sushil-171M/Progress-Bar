import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ limit }) => {
  const multiPreogressBar = [10, 20, 30, 40, 60, 80, 90, 95];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setProgress(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {multiPreogressBar.map((bar, idx) => {
        return (
          <div key={idx}>
            <div className={styles.container}>
              <div
                className={styles.progressbar}
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
            <br />
          </div>
        );
      })}
      <br />
      <br />
      <progress
        style={{ transition: "width 2s ease-in-out" }}
        value={70}
        max={100}
      />
    </>
  );
};

export default ProgressBar;
