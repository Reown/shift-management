import { useEffect, useState } from "react";
import { login } from "../services/Person";
import { LabeledTextField } from "../components/LabeledTextField";

const Login = () => {
  useEffect(() => {});

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clickLogin = (item: string[]) => {
    login(item)
      .then((res) => {
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
              onChange={(e) => setEmail(e)}
            ></LabeledTextField>
            <LabeledTextField
              children={["Password", "password"]}
              onChange={(e) => setPassword(e)}
            ></LabeledTextField>
            <button
              type="button"
              onClick={() => {
                clickLogin([email, password]);
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
