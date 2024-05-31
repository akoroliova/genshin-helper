import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../shared/Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import ToDoTodayPage from "../../pages/ToDoTodayPage/ToDoTodayPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import initialTasks from "../../assets/initialTasks.json";
import CharBuilderPage from "../../pages/CharBuilderPage/CharBuilderPage";
import "./App.css";

function App() {
  /////////////////////////////////////////////////////////////////
  /**
   * For task list
   */
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };
  const [filter, setFilter] = useState("");
  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
  /////////////////////////////////////////////////////////////////

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addTask={addTask}
                filter={filter}
                setFilter={setFilter}
                visibleTasks={visibleTasks}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/charbuilder" element={<CharBuilderPage />} />
          <Route
            path="/tasks"
            element={
              <ToDoTodayPage
                addTask={addTask}
                filter={filter}
                setFilter={setFilter}
                visibleTasks={visibleTasks}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
