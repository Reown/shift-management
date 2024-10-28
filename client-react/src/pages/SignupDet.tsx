import { useEffect, useState } from "react";

const SignupDet = () => {
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="card loginblock mx-auto box">
      <div className="card-body">
        <form className="row g-3 formbody">
          <label>Age</label>
          <input type="text" className="form-control textarea" id="username" />
          <label>Email</label>
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

export default SignupDet;
