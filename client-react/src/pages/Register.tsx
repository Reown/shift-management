import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/Person";
import { LabeledTextField } from "../components/LabeledTextField";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const clickRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await register(email);
    if (res) {
      navigate(res);
    }
  };

  return (
    <div className="card loginblock mx-auto">
      <div className="card-body">
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
      </div>
    </div>
  );
};

export default Register;
