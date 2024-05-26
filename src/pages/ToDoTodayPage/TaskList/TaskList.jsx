import Task from "../Task/Task";

export default function TaskList({ items, onDelete }) {
  if (!items.length) {
    return <p>No tasks to display.</p>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Task data={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
