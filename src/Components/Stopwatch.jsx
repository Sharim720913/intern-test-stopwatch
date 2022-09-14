import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [Hour, setHour] = useState(0);
  const [Min, setMin] = useState(0);
  const [Second, setSecond] = useState(0);
  const [Milsec, setMilsec] = useState(0);
  const [Pause, setPause] = useState(false);

  const onStart = () => {
    setPause(true);
    setHour(0);
    setMin(0);
    setSecond(0);
    setMilsec(0);
  };
  const onPause = () => {
    setPause(false);
  };
  const onReset = () => {
    setHour(0);
    setMin(0);
    setSecond(0);
    setMilsec(0);
  };
  const onResume = () => {
    setPause(true);
  };

  useEffect(() => {
    let interval = null;
    if (Pause) {
      interval = setInterval(() => {
        if (Min > 59) {
          setHour(Hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (Second > 59) {
          setMin(Min + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (Milsec > 9) {
          setSecond(Second + 1);
          setMilsec(0);
          clearInterval(interval);
        }
        if (Milsec <= 9) {
          setMilsec(Milsec + 1);
        }
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        marginLeft: "25%",

        backgroundColor: "gray",
        width: "50%",
        height: "100%",
        border: "5px solid black",
      }}
    >
      <h1>
        {Hour}hrs : {Min}min : {Second}sec : {Milsec}milsec : {Pause}
      </h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onResume}>Resume</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
