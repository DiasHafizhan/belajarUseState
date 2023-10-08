import Input from "./Input"
import Label from "./label"

const InputForm = (props) => {
  const {name, type, placeholder, label} = props

  return (
    <div className="mb-6">
      <Label>{label}</Label>
      <Input 
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputForm