export default function Filter({ value, onFilter }) {
  return (
    <div>
      <p>Search by task name:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
