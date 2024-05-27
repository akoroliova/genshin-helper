import { useState } from "react";
import "./App.css";
import initialTasks from "../../assets/initialTasks.json";
import Filter from "../../pages/ToDoTodayPage/Filter/Filter";
import TaskList from "../../pages/ToDoTodayPage/TaskList/TaskList";
import UncontrolledInput from "../utilityParts/forms/UncontrolledInput";
import ControlledInput from "../utilityParts/forms/ControlledInput";
import SelectDropdown from "../utilityParts/forms/SelectDropdown";
import MultipleDropdown from "../utilityParts/forms/MultipleDropdown";
import FormikForm from "../utilityParts/forms/FormikForm";

function App() {
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

  const [inputValue, setInputValue] = useState(13);

  const [ascLevel, setAscLevel] = useState("A1");

  const makeChoice = (newChoice) => {
    console.log("User has selected: ", newChoice);
  };

  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };

  return (
    <>
      <div>
        <h1>Forms with Formik</h1>
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
