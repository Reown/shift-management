import { useState } from "react";

interface LoginFormProps {
  onClick: (item: string[]) => void;
}

function LoginForm({ onClick }: LoginFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form className="row g-3">
      <div className="">
        <label className="">Username</label>
        <input
          type="text"
          className="form-control textarea"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="">
        <label className="">Password</label>
        <input
          type="password"
          className="form-control textarea"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="">
        <button
          type="button"
          onClick={() => {
            onClick([username, password]);
          }}
          className="btn"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
