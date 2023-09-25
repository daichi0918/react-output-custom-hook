import React, { useState } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

export const useTodo = () => {
  const [todos, setTodos] = useState(INIT_TODO_LIST);
  const [todo, setTodo] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  const handleTaskAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && todo !== '') {
      setTodos((todos) => [...todos, { task: todo }]);
      setTodo('');
    }
  };
  const handleRemoveTask = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const showTodoList = () => {
    return todos.filter((todo) => {
      const regexp = new RegExp('^' + searchInput, 'i');
      return todo.task.match(regexp);
    });
  };

  const states = { todo, searchInput, showTodoList };

  const actions = {
    handleTaskInputChange,
    handleSearchInputChange,
    handleTaskAdd,
    handleRemoveTask,
  };

  return {
    todo,
    searchInput,
    showTodoList,
    handleTaskInputChange,
    handleSearchInputChange,
    handleTaskAdd,
    handleRemoveTask,
  };
};
