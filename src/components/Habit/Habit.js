import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Habit.module.css";
import store from "../../store/store";
import { deletingHabit } from "../../store/actions";

function Habit({ habit, reRender }) {
  const navigation = useNavigate();
  console.log(habit);

  function deleteHabit(id) {
    store.dispatch(deletingHabit(id));
    reRender();
  }

  function habitDetails(id) {
    navigation(`/habit/${id}/detail`);
  }

  return (
    <div className={styles.container}>
      <h3>{habit.title}</h3>
      <div>
        <p>Category:{habit.category}</p>
        <p>
          count: {habit.workDone}/{habit.week.length}
        </p>
        <ion-icon
          name="trash"
          onClick={() => {
            deleteHabit(habit.id);
          }}
        ></ion-icon>
        <button onClick={() => habitDetails(habit.id)}>Details</button>
      </div>
    </div>
  );
}

export default Habit;
