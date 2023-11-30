import React, { useState } from "react";
import styles from "./Home.module.css";
import Form from "../HabitForm/Form";

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.container}>
      {showForm ? (
       <Form/>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Habit</button>
      )}
    </div>
  );
}

export default Home;
