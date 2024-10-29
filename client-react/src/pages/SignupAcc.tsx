import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface SignUpAccContextType {
  isDisabled: boolean;
  setIsDisabled: (disabled: boolean) => void;
}

export const ParentContext = createContext<SignUpAccContextType>({
  isDisabled: false,
  setIsDisabled: () => {},
});

const SignUpAcc = () => {
  useEffect(() => {});

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cfmPassword, setCfmPassword] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);

  const clickContinue = (item: string[]) => {
    console.log(item);
    navigate("/signup/details");
  };

  return (
    <ParentContext.Provider value={{ isDisabled, setIsDisabled }}>
      <div className="container">
        <div
          className={
            isDisabled
              ? "disabled card loginblock mx-auto item1"
              : "card loginblock mx-auto item1"
          }
        >
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
    </ParentContext.Provider>
  );
};

export default SignUpAcc;
