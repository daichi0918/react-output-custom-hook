import { InputForm } from '../../atoms/InputForm';
import { AddTodo } from '../../organisms/AddTodo';
import { TodoList } from '../../organisms/TodoList';
import { useTodo } from '../../../hooks/useTodo';
import styles from './styles.module.css'

export const TodoTemplate = () => {
  const {todo, searchInput, showTodoList, handleTaskInputChange, handleSearchInputChange, handleTaskAdd, handleRemoveTask} = useTodo();
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <AddTodo 
          inputValue={todo}
          handleTaskInputChange={handleTaskInputChange}
          handleTaskAdd={handleTaskAdd}
        />
      </section>
      <section className={styles.common}>
        <InputForm 
          placeholder={"Search KeyWord"}
          InputValue={searchInput}
          handleChangeValue={handleSearchInputChange}
        />
      </section>
      <section className={styles.common}>
        <TodoList
          todoList={showTodoList}
          handleRemoveTask={handleRemoveTask} 
        />
      </section>
    </div>
  );
}