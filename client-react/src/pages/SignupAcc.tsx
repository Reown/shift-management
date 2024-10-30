import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LabeledTextField } from "../components/LabeledTextField";

interface SignUpAccContext {
  isDisabled: boolean;
  setIsDisabled: (disabled: boolean) => void;
}

export const ParentContext = createContext<SignUpAccContext>({
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
              <LabeledTextField
                children={["Emailtest", "text"]}
                onChange={(e) => setUsername(e)}
              ></LabeledTextField>
              <LabeledTextField
                children={["Password", "password"]}
                onChange={(e) => {
                  setPassword(e);
                }}
              ></LabeledTextField>
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control textfield"
                id="cfmpassword"
                onChange={(e) => setCfmPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn"
                onClick={() => {
                  clickContinue([username]);
                }}
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
