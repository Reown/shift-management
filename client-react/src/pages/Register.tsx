import { useState } from "react";
import { LabeledTextField } from "../components/LabeledTextField";

const Register = () => {
  const [email, setEmail] = useState<string>("");

  const clickRegister = (item: string) => {
    console.log(item);
  };

  return (
    <div className="card loginblock mx-auto">
      <div className="card-body">
        <form className="row g-3 formbody">
          <LabeledTextField
            children={["Email", "text"]}
            onChange={(e) => {
              setEmail(e);
            }}
          ></LabeledTextField>
          <button
            type="button"
            className="btn"
            onClick={() => {
              clickRegister(email);
            }}
          >
            Register New Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
