import React, { useState, useEffect } from "react";

// css
import "../styles/count.css";

function Count() {
  const calculateTimeLeft = () => {
    var dataConferencia = new Date(`11/12/${2022}`);
    dataConferencia.setHours(16, 0, 0);
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

  let gapi = window.gapi;
  let CLIENT_ID =
    "362117873750-o9ukumcakk93f9shobj65mmt7d7mloo8.apps.googleusercontent.com";
  // let CLIENT_ID = "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"
  let API_KEY = "AIzaSyDITFxMR9QN_duocAUAgYOUXVSBVlGu7kk";
  let DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  let SCOPES = "https://www.googleapis.com/auth/userinfo.name";

  //export a function that gets start time(date picker), location, name
  const addCalendarEvent = (startTime, address, clientName) => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3");
      //time zone list:
      // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      let timeZone = "America/Fortaleza";
      let duration = "00:30:00"; //duration of each event, here 30 minuts

      //event start time - im passing datepicker time, and making it match      //with the duration time, you can just put iso strings:
      //2020-06-28T09:00:00-07:00'

      let startDate = new Date(startTime);
      let msDuration =
        (Number(duration.split(":")[0]) * 60 * 60 +
          Number(duration.split(":")[1]) * 60 +
          Number(duration.split(":")[2])) *
        1000;
      let endDate = new Date(startDate.getTime() + msDuration);
      let isoStartDate = new Date(
        startDate.getTime() - new Date().getTimezoneOffset() * 60 * 1000
      )
        .toISOString()
        .split(".")[0];
      let isoEndDate = new Date(
        endDate.getTime() - new Date().getTimezoneOffset() * 60 * 1000
      )
        .toISOString()
        .split(".")[0];

      //sign in with pop up window
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          let event = {
            summary: clientName, // or event name
            location: address, //where it would happen
            start: {
              dateTime: isoStartDate,
              timeZone: timeZone,
            },
            end: {
              dateTime: isoEndDate,
              timeZone: timeZone,
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
            reminders: {
              useDefault: false,
              overrides: [{ method: "popup", minutes: 20 }],
            },
          };

          //if you need to list your events than keep it
          gapi.client.calendar.events
            .list({
              calendarId: "primary",
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: "startTime",
            })
            .then((response) => {
              const events = response.result.items;
              console.log("EVENTS: ", events);
            });

          //end of event listing

          let request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            console.log(event.htmlLink);
            window.open(event.htmlLink);
          });
        });
    });
  };

  return (
    <div className="app-count">
      {timerComponents.length ? timerComponents : <p>Já começou!!</p>}
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
