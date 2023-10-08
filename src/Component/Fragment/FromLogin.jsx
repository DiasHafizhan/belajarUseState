import InputForm from "../Element/input"
import Button from "../Element/Button"

const FromLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault()
    console.log("Login")
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = '/product'
  }


  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Login"
        name="email"
        type="email"
        placeholder="Example@gmail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="****"
      />
      <Button classname="w-full bg-blue-500" type="submit">Login</Button>
    </form>
  )
}

export default FromLogin