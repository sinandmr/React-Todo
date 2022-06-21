export default function Footer({ filter, setFilter, list, setList }) {
  const handleClick = e => {
    const eventName = e.target.name;
    setFilter(eventName);
  };
  const clearCompleted = () => {
    setList([...list.filter(item => item.category !== 'completed')]);
  };

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{list.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={handleClick}
            href="#/"
            name="all"
            className={filter === 'all' ? 'selected' : undefined}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            href="#/"
            name="active"
            className={filter === 'active' ? 'selected' : undefined}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            href="#/"
            name="completed"
            className={filter === 'completed' ? 'selected' : undefined}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
}
