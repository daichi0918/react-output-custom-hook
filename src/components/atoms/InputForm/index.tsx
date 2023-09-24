
type Props = {
  InputValue: string;
  placeholder: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}


export const InputForm = (props: Props) => {
  // props
  const {InputValue, placeholder, handleChangeValue, handleKeyUp} = props;

  return (
    <input 
      type="text"
      placeholder={placeholder}
      value={InputValue}
      onChange={handleChangeValue}
      onKeyUp={handleKeyUp}
    />
  )
}