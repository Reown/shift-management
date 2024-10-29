import { useContext, useEffect, useState } from "react";
import { ParentContext } from "./SignupAcc";

const SignUpDet = () => {
  const { setIsDisabled } = useContext(ParentContext);
  useEffect(() => {
    setIsDisabled(true);
    return () => {
      setIsDisabled(false);
    };
  });
  const [email, setEmail] = useState<string>("");

  return (
    <div className="card loginblock mx-auto item2">
      <div className="card-body">
        <form className="row g-3 formbody">
          <div className="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control textarea"
              id="username"
            />
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              type="password"
              className="form-control textarea"
              id="password"
            />
          </div>
          <label>Email</label>
          <input
            type="password"
            className="form-control textarea"
            id="password"
          />
          <label>Date of Birth</label>
          <input
            type="password"
            className="form-control textarea"
            id="password"
          />
          <button type="button" className="btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpDet;

// role, occupation
