import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.css';

type Props = {
  todoList: () => { task: string }[];
  handleRemoveTask: (index: number) => void;
}

export const TodoList = (props: Props) => {
  const { todoList, handleRemoveTask } = props;

  return (
    <ul className={styles.list}>
      {todoList().map((todo: { task: string }, index: number) => (
        <div>
          <li key={index} className={styles.todo}>
            <span className={styles.task}>{todo.task}</span>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => handleRemoveTask(index)}
              />
            </div>
          </li>
        </div>
      ))}
    </ul>
  )
}