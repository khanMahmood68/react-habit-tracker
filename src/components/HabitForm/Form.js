import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";
import { Store } from "react-notifications-component";
import { addingHabit } from "../../store/actions";
import styles from './Form.module.css'

function Form() {
  const [habit, setHabit] = useState("");
  const [category, setCategory] = useState("");
  const navigation = useNavigate();
  const data = {
    habit,
    category,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (data.habit === "" || data.category === "") {
      Store.addNotification({
        title: "OH NO!",
        message: "Please fill the habit and category",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      return;
    }

    store.dispatch(addingHabit(data))
    navigation("/dashboard");
  }

  return (

      <form className={styles.container}>
        <div>
          <label>Enter Habits: </label>
          <br />
          <input
            type="text"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            required
            placeholder="Enter Habit..."
          />
        </div>
        <div>
          <label>Enter Category: </label>
          <br />
          <input
            type="text"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category..."
          />
        </div>
        <button onClick={handleSubmit}>Save Habit</button>
      </form>

  );
}

export default Form;
