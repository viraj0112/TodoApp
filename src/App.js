import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/GoalList/GoalList";
import CourseInput from "./components/CourseGoals/Input/Input";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { work: "Homework", id: "goal1" },
    { work: "Code", id: "goal2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ work: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No scheduled work. Add one.</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        click on the task to delete
      </p>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
