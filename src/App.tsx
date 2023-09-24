import React, { useState } from 'react';
import './App.css';
import { InputForm } from './components/atoms/InputForm';
import { AddTodo } from './components/organisms/AddTodo';
import { TodoList } from './components/organisms/TodoList';

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

  const handleTaskAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && todo !== '') {
      setTodos((todos) => [...todos, {task: todo }]);
      setTodo('');
    }
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
        <AddTodo 
          inputValue={todo}
          handleTaskInputChange={handleTaskInputChange}
          handleTaskAdd={handleTaskAdd}
        />
      </section>
      <section>
        <InputForm 
          placeholder={"Search KeyWord"}
          InputValue={searchInput}
          handleChangeValue={handleSearchInputChange}
        />
      </section>
      <section>
        <TodoList
          todoList={showTodoList}
          handleRemoveTask={handleRemoveTask} 
        />
      </section>
    </div>
  );
}

export default App;
