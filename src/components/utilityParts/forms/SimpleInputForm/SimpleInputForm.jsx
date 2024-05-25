//import { useDispatch } from "react-redux";
//import { addTask } from "../../../../redux/tasks/tasksOperations";
import css from "./SimpleInputForm.module.css";
import { useId } from "react";

export default function SimpleInputForm() {
  //const dispatch = useDispatch();
  const taskFormId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.currentTarget;
    // const text = form.elements.text.value;
    // if (text !== "") {
    //   dispatch(addTask(text));
    //   form.reset();
    //   return;
    // }
    alert("Task cannot be empty. Enter some text!");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={taskFormId}>Input your task</label>
      <input type="text" name="task" id={taskFormId} className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
}
