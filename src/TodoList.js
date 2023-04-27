import { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { text: inputValue.trim(), completed: false }]);
    setInputValue('');
  }

  function handleDelete(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function handleComplete(index) {
    setTodos(todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    }));
  }

  return (
    <div className="todo-list-container" data-testid="todotest">
      <h1 className="todo-header">𝚆𝚛𝚒𝚝𝚎 𝚢𝚘𝚞𝚛 𝚝𝚊𝚜𝚔𝚜 𝙷𝚎𝚛𝚎 !!</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="todo-add-button" type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span className="todo-text">{todo.text}</span>
            <div>
              <button className="todo-delete-button" onClick={() => handleDelete(index)}>Delete</button>
              <button className="todo-complete-button" onClick={() => handleComplete(index)} data-testid="complete">
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
