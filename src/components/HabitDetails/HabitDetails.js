import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import store from "../../store/store";
import styles from "./HabitDetails.module.css";
import ShowWeek from "../ShowWeek/ShowWeek";

function HabitDetails() {
  // using useParams hook for getting params from url
  const params = useParams();

  // Managing the state
  const [habitDetails, setHabitDetails] = useState("");

  useEffect(() => {
    // filtering and setting up the habits
    const habits = store.getState();
    const habitDetail = habits.filter((habit) => {
      return habit.id === parseFloat(params.id);
    });
    setHabitDetails(...habitDetail);
  }, [params.id]);

  console.log(habitDetails);

  return (
    <div>
      <h1 className={styles.head}>{habitDetails.title}</h1>
      <div className={styles.detail}>
        <p>Category:{habitDetails.category}</p>
        <p>
          Count:{habitDetails.workDone}/{habitDetails.week?.length}
        </p>
      </div>
      <div className={styles.weeks}>
        {habitDetails.week?.map((day, index) => (
          <ShowWeek habit={habitDetails} {...day} index={index} />
        ))}
      </div>
    </div>
  );
}

export default HabitDetails;
