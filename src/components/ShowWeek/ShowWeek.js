import React, { useEffect, useState } from "react";
import store from "../../store/store";
import { changingStatus } from "../../store/actions";
import styles from "./ShowWeek.module.css";

function ShowWeek(props) {
  // Setting up state for done and not-done
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

  // Creating function for Done state
  function doneHandler() {
    if (done) {
      setDone(false);
      store.dispatch(changingStatus(props.habit, props.index, " "));
    } else {
      setDone(true);
      setNotDone(false);
      store.dispatch(changingStatus(props.habit, props.index, "done"));
    }
  }

  // Creating a state for not-done state
  function notDoneHandler() {
    if (notDone) {
      setNotDone(false);
      store.dispatch(changingStatus(props.habit, props.index, " "));
    } else {
      setNotDone(true);
      setDone(false);
      store.dispatch(changingStatus(props.habit, props.index, "not-done"));
    }
  }

  const date = new Date();
  const weekDate = new Date(props.dateString);

  useEffect(() => {
    if (props.status === "done") {
      setDone(true);
      setNotDone(false);
    } else if (props.status === "not-done") {
      setNotDone(true);
      setDone(false);
    } else {
      setDone(false);
      setNotDone(false);
    }
  }, []);

  return (
    <div
      className={
        weekDate.toDateString() === date.toDateString()
          ? styles.today
          : styles.container
      }
    >
      <p>{props.day}</p>
      <p>{props.date}</p>
      <div>
        <ion-icon
          onClick={doneHandler}
          name={done ? "checkmark-circle" : "checkmark-circle-outline"}
        ></ion-icon>
        <ion-icon
          onClick={notDoneHandler}
          name={notDone ? "close-circle" : "close-circle-outline"}
        ></ion-icon>
      </div>
    </div>
  );
}

export default ShowWeek;
