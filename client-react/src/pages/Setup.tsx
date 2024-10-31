import { useContext, useEffect, useState } from "react";

import { LabeledTextField } from "../components/LabeledTextField";

const Setup = () => {
  useEffect(() => {});

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");

  const clickSignup = (item: string[]) => {
    console.log([firstName, lastName, birthdate]);
  };

  return (
    <div className="card loginblock mx-auto item2">
      <div className="card-body">
        <form className="row g-3 formbody">
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
              setBirthdate(e);
            }}
          ></LabeledTextField>
          <button
            type="button"
            className="btn"
            onClick={() => {
              clickSignup([]);
            }}
          >
            Signup
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
