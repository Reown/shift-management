import { FormEvent, useEffect, useState } from "react";
import { insertNew } from "../services/Person";
import { LabeledTextField } from "../components/LabeledTextField";

const Setup = () => {
  useEffect(() => {});

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const clickConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName, lastName, birthDate);
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
