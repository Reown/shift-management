import { useEffect } from "react";
import Cookies from "js-cookie";
import LoginForm from "../components/specialised/LoginForm";

const Login = () => {
  useEffect(() => {
    Cookies.remove("token");
  });

  return (
    <div className="card block mx-auto">
      <div className="card-body">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
