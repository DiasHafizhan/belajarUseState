import InputForm from "../Element/input"
import Button from "../Element/Button"


const FromRegister = () => {
  const handelRegister = (event) =>{
    event.preventDefault()
    console.log("sip")
    localStorage.setItem('text', event.target.text.value)
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = '/login'
  }
  return (
    <form onSubmit={handelRegister}>
      <InputForm
        label="Full Name"
        name="text"
        type="text"
        placeholder="Insert your name"
      />
      <InputForm
        label="Email"
        name= "email"
        type="email"
        placeholder="Example@gmail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="***"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="***"
      />

      <Button classname="w-full bg-blue-500" type="submit">Register</Button>
    </form>
  )
}

export default FromRegister