import { useId } from "react";

export default function UncontrolledInput({ onAdd }) {
  const taskFormId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;

    if (text !== "") {
      onAdd({
        id: Date.now(),
        text: text,
      });
      form.reset();
      return;
    }
    alert("Task cannot be empty. Enter some text!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={taskFormId}>Input your task:</label>
      <input type="text" name="text" id={taskFormId} />
      <button type="submit">Add task</button>
    </form>
  );
}
