function Main({ list, setList, filter }) {
  const onChangeInput = e => {
    const itemName = e.target.parentElement.childNodes[1].textContent;
    const itemID = list.findIndex(item => item.name === itemName);
    e.target.checked === true
      ? (list[itemID].category = 'completed')
      : (list[itemID].category = 'active');

    setList([...list]);
  };

  const onClickButton = e => {
    const itemName = e.target.parentElement.childNodes[1].textContent;
    const itemID = list.findIndex(item => item.name === itemName);
    list.splice(itemID, 1);
    setList([...list]);
  };

  const filtered = list.filter(item => {
    if (filter === 'all') return item;
    if (filter === 'active') return item.category === 'active';
    else return item.category === 'completed';
  });

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filtered.map((item, i) => (
          <li key={i} className={item.category}>
            <div className="view">
              <input
                onChange={onChangeInput}
                id={i}
                className="toggle"
                type="checkbox"
                checked={item.category === 'completed' && 'checked'}
              />
              <label>{item.name}</label>
              <button className="destroy" onClick={onClickButton}></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Main;
