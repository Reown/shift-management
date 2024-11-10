import { useEffect } from "react";
import LoginForm from "../components/specialised/LoginForm";
import Cookies from "js-cookie";

const Login = () => {
  useEffect(() => {
    Cookies.remove("token");
  });

  return (
    <div className="card formblock mx-auto">
      <div className="card-body">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
