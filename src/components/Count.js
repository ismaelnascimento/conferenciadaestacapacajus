import React, { useState, useEffect } from "react";

// css
import "../styles/count.css";

function Count() {
  const calculateTimeLeft = () => {
    var dataConferencia = new Date(`11/11/${2023}`);
    dataConferencia.setHours(15, 0, 0);
    let difference = +dataConferencia - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias:
          Math.floor(difference / (1000 * 60 * 60 * 24)) === 0
            ? 0
            : Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas:
          Math.floor((difference / (1000 * 60 * 60)) % 24) === 0
            ? 0
            : Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos:
          Math.floor((difference / 1000 / 60) % 60) === 0
            ? 0
            : Math.floor((difference / 1000 / 60) % 60),
        segundos:
          Math.floor((difference / 1000) % 60) === 0
            ? 0
            : Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div>
        <p>{timeLeft[interval]}</p>
        <h5>{interval}</h5>
      </div>
    );
  });

  return (
    <div className="app-count">
      {timerComponents.length ? timerComponents : <p>Começou!</p>}
      {/* <button
        onClick={() =>
          addCalendarEvent(
            new Date(),
            "Pacajus",
            "CONFERÊNCIA SEMESTRAL ESTACA PACAJUS BRASIL"
          )
        }
      >
        oi
      </button> */}
    </div>
  );
}

export default Count;
