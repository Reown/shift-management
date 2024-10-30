import { useState } from "react";
import { register } from "../services/Person";
import { LabeledTextField } from "../components/LabeledTextField";

const Register = () => {
  const [email, setEmail] = useState<string>("");

  const clickRegister = async (item: string) => {
    register(item)
      .then((res) => {
        if (!res) {
          throw "failed to register " + item;
        }
        console.log("registered " + item);
      })
      .catch((err) => {
        console.log(err);
      });
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
