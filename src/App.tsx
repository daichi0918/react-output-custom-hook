import React, { useState } from 'react';
import './App.css';

function App() {
  const initTodos = [
    {task: 'Todo1'},
    {task: 'Todo2'}
  ]
  const [todos, setTodos] = useState(initTodos);
  const [todo, setTodo] = useState('');
  const [searchInput, setSearchInput] =useState('');

  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

  const handleTaskAdd = (input: string) => {
    if(input === '') return;
    setTodos((todos) => [...todos, {task: todo }]);
  }
  const handleRemoveTask = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const showTodoList = () => {
    return todos.filter((todo) => {
      const regexp = new RegExp("^" + searchInput, "i");
      return todo.task.match(regexp);
    })
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <section>
        <h2>ADD TODO</h2>
        <input 
          value={todo} 
          type="text" 
          placeholder="New Todo" 
          onChange={handleTaskInputChange} 
          onKeyUp={e => {
            if (e.key === 'Enter') {
              handleTaskAdd(todo)
            }
          }}
          />
      </section>
      <section>
        <input 
        value={searchInput}
        type="text" 
        placeholder="Search KeyWord" 
        onChange={handleSearchInputChange}
        />
      </section>
      <section>
        <ul>
          {showTodoList().map((todo, index) => (
            <div>
              <li key={index}>
                {todo.task}
                <button onClick={() => handleRemoveTask(index)}>X</button>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
