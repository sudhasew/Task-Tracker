import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { Task } from "./Task";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Food Shoping",
      day: "Mar 24th",
      reminder: true,
    },
    {
      id: 2,
      text: "Teacher's Meeting",
      day: "Mar 30th",
      reminder: true,
    },
    {
      id: 3,
      text: "Birthday Party",
      day: "Apr 22nd",
      reminder: false,
    },
  ]);

  const addTask = (task: any) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTaskForm(!showAddTaskForm)}
        showAdd={showAddTaskForm}
      />
      {showAddTaskForm && <AddTask onAdd={addTask} />}
      <h2 className="tasks-title">Tasks</h2>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask} />
      ) : (
        <h2 className="message">No Tasks Left</h2>
      )}
    </div>
  );
}

export default App;
