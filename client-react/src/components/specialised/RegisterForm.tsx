import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/Person";
import { LabeledTextField } from "../LabeledTextField";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const clickRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await register([email]);
    if (res) {
      navigate(res);
    }
  };

  return (
    <form className="row g-3 formbody" onSubmit={clickRegister}>
      <LabeledTextField
        children={["Email", "text"]}
        onChange={(e) => {
          setEmail(e);
        }}
      ></LabeledTextField>
      <button type="submit" className="btn">
        Register New Staff
      </button>
    </form>
  );
};

export default RegisterForm;
