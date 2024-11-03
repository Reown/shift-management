import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/Person";
import { createToken } from "../../services/Auth";
import { LabeledTextField } from "../common/LabeledTextField";

const LoginForm = () => {
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
  );
};

export default LoginForm;
