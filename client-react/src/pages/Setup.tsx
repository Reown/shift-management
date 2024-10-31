import { useEffect, useState } from "react";
import { LabeledTextField } from "../components/LabeledTextField";

const Setup = () => {
  useEffect(() => {});

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [cfmPassword, setCfmPassword] = useState<string>("");

  const clickConfirm = (item: string[]) => {
    console.log([firstName, lastName, birthDate]);
  };

  return (
    <div className="card loginblock mx-auto">
      <div className="card-body">
        <form className="row g-3 formbody">
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
          <p></p>
          <p>Set new password</p>
          <LabeledTextField
            children={["New password", "password"]}
            onChange={(e) => {
              setNewPassword;
            }}
          ></LabeledTextField>
          <LabeledTextField
            children={["Confirm password", "password"]}
            onChange={(e) => {
              setCfmPassword;
            }}
          ></LabeledTextField>
          <button
            type="button"
            className="btn"
            onClick={() => {
              clickConfirm([]);
            }}
          >
            Confirm details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setup;

// role, occupation
//create label+textbox component
//const displayChild = children[1]
//<ParentComponent children={['child1', "child2"]};
