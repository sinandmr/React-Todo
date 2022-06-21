import { useState } from 'react';

const initialObject = {
  value: '',
  placeholder: 'What needs to be done?',
};

export default function Header({ setList }) {
  const [inputVal, setInputVal] = useState(initialObject);

  const onChangeInput = e => {
    setInputVal({ ...inputVal, value: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    setList(list => [...list, { name: inputVal.value, category: 'active' }]);
    setInputVal(initialObject);
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={submitForm}>
        <input
          name="todo"
          onChange={onChangeInput}
          className="new-todo"
          value={inputVal.value}
          placeholder={inputVal.placeholder}
          autoFocus
        />
      </form>
    </div>
  );
}
