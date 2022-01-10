import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Covid Booster",
      day: "Jan 12th at 3.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Deliver Packages",
      day: "Jan 19th at 10.00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Walk the dog",
      day: "Jan 31st at 17.30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container'>
      <Header title='Tracker' />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
