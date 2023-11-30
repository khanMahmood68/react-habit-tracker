import React, { useEffect, useState } from "react";
import store from "../../store/store";
import Habit from "../Habit/Habit";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // setting up the state of habits
    setHabits(store.getState());
  }, []);

  // function for re-rendering the dashboard component

  function reRender() {
    setHabits(store.getState());
  }

  return (
    <div className={styles.container}>
      <h1>Your Habits</h1>
      {habits.length === 0 ? (
        <h1>No habits to display</h1>
      ) : (
        habits.map((habit) => (
          <Habit reRender={reRender} habit={habit} key={habit.id} />
        ))
      )}
    </div>
  );
}

export default Dashboard;
