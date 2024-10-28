import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SignupAcc = () => {
  useEffect(() => {});

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cfmPassword, setCfmPassword] = useState<string>("");

  const clickContinue = (item: string[]) => {
    navigate("/signup/details");
  };

  return (
    <div className="container">
      <div className="card loginblock mx-auto box">
        <div className="card-body">
          <form className="row g-3 formbody">
            <label>Username</label>
            <input
              type="text"
              className="form-control textarea"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              className="form-control textarea"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control textarea"
              id="cfmpassword"
              onChange={(e) => setCfmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                clickContinue([username]);
              }}
              className="btn"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignupAcc;
