import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Person";
import { createToken } from "../services/Auth";
import { LabeledTextField } from "../components/LabeledTextField";
import Cookies from "js-cookie";

const Login = () => {
  useEffect(() => {
    Cookies.remove("token");
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clickLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login([email, password]);
    if (res) {
      const token = await createToken(email);
      if (token) {
        navigate(res);
      }
    }
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
