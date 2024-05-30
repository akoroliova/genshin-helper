import { useState } from "react";
import "./App.css";
import initialTasks from "../../assets/initialTasks.json";
import Filter from "../../pages/ToDoTodayPage/Filter/Filter";
import TaskList from "../../pages/ToDoTodayPage/TaskList/TaskList";
import UncontrolledInput from "../shared/forms/UncontrolledInput";
import ControlledInput from "../shared/forms/ControlledInput";
import SelectDropdown from "../shared/forms/SelectDropdown";
import MultipleDropdown from "../shared/forms/MultipleDropdown";
import FormikForm from "../shared/forms/FormikForm/FormikForm";

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

  /**
   * For utils -> forms
   */
  const [inputValue, setInputValue] = useState(13);
  const [ascLevel, setAscLevel] = useState("A1");
  const makeChoice = (newChoice) => {
    console.log("User has selected: ", newChoice);
  };
  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };
  /////////////////////////////////////////////////////////////////

  /**
   * For
   */

  return (
    <>
      <div>
        <FormikForm onAdd={handleAddUser} />
      </div>
      <UncontrolledInput onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList items={visibleTasks} onDelete={deleteTask} />
      <hr />
      <ControlledInput value={inputValue} onType={setInputValue} />
      <hr />
      <SelectDropdown value={ascLevel} onChangeLevel={setAscLevel} />
      <hr />
      <MultipleDropdown onChoice={makeChoice} />
    </>
  );
}

export default App;
