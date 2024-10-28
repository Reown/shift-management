import { useEffect, useState } from "react";
import { login } from "../services/Person";
import LoginForm from "../components/LoginForm";

const clickLogin = (item: string[]) => {
  console.log(item);
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
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <div className="card loginblock mx-auto">
        <div className="card-body">
          <form className="row g-3 formbody">
            <label>Username</label>
            <input
              type="text"
              className="form-control textarea"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              className="form-control textarea"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                clickLogin([username, password]);
              }}
              className="btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
