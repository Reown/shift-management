import { FormEvent, useState } from "react";
import { register } from "../services/Person";
import { LabeledTextField } from "../components/LabeledTextField";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const clickRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(email)
      .then((res) => {
        if (!res) {
          throw "failed to register " + email;
        }
        console.log("registered " + email);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
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
