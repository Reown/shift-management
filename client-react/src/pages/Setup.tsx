import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { newInfo } from "../services/Person";
import { LabeledTextField } from "../components/LabeledTextField";

const Setup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const clickConfirm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await newInfo([firstName, lastName, birthDate]);
    if (res) {
      navigate(res);
    }
  };

  return (
    <div className="card loginblock mx-auto">
      <div className="card-body">
        <form className="row g-3 formbody" onSubmit={clickConfirm}>
          <p>Enter personal details</p>
          <div className="col-md-6">
            <LabeledTextField
              children={["First Name", "text"]}
              onChange={(e) => {
                setFirstName(e);
              }}
            ></LabeledTextField>
          </div>
          <div className="col-md-6">
            <LabeledTextField
              children={["Last Name", "text"]}
              onChange={(e) => {
                setLastName(e);
              }}
            ></LabeledTextField>
          </div>
          <LabeledTextField
            children={["Date of Birth", "date"]}
            onChange={(e) => {
              setBirthDate(e);
            }}
          ></LabeledTextField>
          <button type="submit" className="btn">
            Confirm details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setup;

//get email from login page
//setup setupInfo using post in person not auth
