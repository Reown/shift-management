import { useEffect, useState } from "react";
import { login } from "../services/OldPerson";
import { LabeledTextField } from "../components/LabeledTextField";

const Login = () => {
  useEffect(() => {});

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

  return (
    <div>
      <div className="card loginblock mx-auto">
        <div className="card-body">
          <form className="row g-3 formbody">
            <LabeledTextField
              children={["Email", "text"]}
              onChange={(e) => setUsername(e)}
            ></LabeledTextField>
            <LabeledTextField
              children={["Password", "password"]}
              onChange={(e) => setUsername(e)}
            ></LabeledTextField>
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
