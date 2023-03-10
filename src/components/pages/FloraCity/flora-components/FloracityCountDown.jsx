/* eslint-disable array-callback-return */
import React from "react";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-12-31`) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (39999 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1999 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1500 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function FloracityCountDown({ style }) {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <span style={style}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
