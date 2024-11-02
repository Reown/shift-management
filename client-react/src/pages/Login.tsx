import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Person";
import { createToken } from "../services/Auth";
import { LabeledTextField } from "../components/LabeledTextField";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clickLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login([email, password])
      .then((res) => {
        if (!res) {
          throw "failed to log into " + email;
        }
        console.log("logged in");
        createToken(email).then((res) => {
          if (!res) {
            navigate("/setup");
          } else {
            navigate("/dashboard");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card loginblock mx-auto">
        <div className="card-body">
          <form className="row g-3 formbody" onSubmit={clickLogin}>
            <LabeledTextField
              children={["Email", "text"]}
              onChange={(e) => setEmail(e)}
            ></LabeledTextField>
            <LabeledTextField
              children={["Password", "password"]}
              onChange={(e) => setPassword(e)}
            ></LabeledTextField>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
