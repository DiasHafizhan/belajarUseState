import Authlayout from "../Layout/Authlayout"
import FromLogin from "../Fragment/FromLogin"

const Login = () => {
  return (
    <Authlayout title="Login" type="login">
      <FromLogin />
    </Authlayout>
  )
}

export default Login