import React, { useState } from 'react';
import { InputForm } from '../../atoms/InputForm';
import { AddTodo } from '../../organisms/AddTodo';
import { TodoList } from '../../organisms/TodoList';
import { INIT_TODO_LIST } from '../../../constants/data';

export const TodoTemplate = () => {
  const [todos, setTodos] = useState(INIT_TODO_LIST);
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