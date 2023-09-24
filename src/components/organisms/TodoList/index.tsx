import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  todoList: () => { task: string }[];
  handleRemoveTask: (index: number) => void;
}

export const TodoList = (props: Props) => {
  const { todoList, handleRemoveTask } = props;

  return (
    <ul>
      {todoList().map((todo: { task: string }, index: number) => (
        <div>
          <li key={index}>
            <span>{todo.task}</span>
            {/* <button onClick={() => handleRemoveTask(index)}>X</button> */}
            <div>
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