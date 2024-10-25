import { useEffect } from "react";
import { login } from "../services/Person";
import LoginForm from "../components/LoginForm";

const clickLogin = (item: string[]) => {
  login(item)
    .then((res) => {
      console.log(res);
      if (!res) {
        throw "failed to log into " + item[0];
      }
      console.log("logged into " + item[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Login = () => {
  useEffect(() => {});
  return (
    <div>
      <div className="card loginblock mx-auto">
        <div className="card-body">
          <LoginForm onClick={clickLogin}></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
