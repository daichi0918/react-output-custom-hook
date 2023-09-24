import { InputForm }from '../../atoms/InputForm/index';

type Props = {
  inputValue: string;
  handleTaskInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTaskAdd: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const AddTodo = (props: Props) => {
  const { inputValue, handleTaskInputChange, handleTaskAdd} = props;

  return (
    <>
      <h2>{"ADD TODO"}</h2>
      <InputForm 
        InputValue={inputValue}
        placeholder={"New Todo"}
        handleChangeValue={handleTaskInputChange}
        handleKeyUp={handleTaskAdd}
      />
    </>
  )
}