import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { newtask } from "./services/newtask";
import { register, login, gettest } from "./services/Person";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ProfileButton from "./components/ProfileButton";
import LoginForm from "./components/LoginForm";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    //navigate("/login");
  });

  let items = ["sg", "my", "us", "eu", "en", "aa"];
  const navigate = useNavigate();

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const clickGetTest = () => {
    gettest(Cookies.get("token") as string)
      .then((res) => {
        if (!res) {
          throw "failed get2test";
        }
        console.log("heyypass");
      })
      .catch((err) => {
        console.log("gg" + err);
      });
  };

  const clickLogin = async (item: string[]) => {
    try {
      const res = await login(item);
      if (!res) {
        throw "failedlogin";
      }
      console.log("loggedin");
    } catch (err) {
      console.log(err);
    }
  };

  const clickRegister = async (item: string[]) => {
    try {
      const res = await register(item);
      if (!res) {
        throw "failedregister";
      }
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };

  const clickProfile = () => {
    //navigate("/profiles");
    console.log("profielbutton test");
  };

  const clickAbout = () => {
    //navigate("/about");
    console.log("aboutbutton test");
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <div className="card loginblock mx-auto">
        <div className="card-body">
          <LoginForm onClick={clickLogin}></LoginForm>
        </div>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="country"
          onSelectItem={handleSelectItem}
        />
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <ul>test</ul>world
          </Alert>
        )}
        <Button onClick={() => setAlertVisibility(true)}>My</Button>

        <p />
        <Link to="/profiles">
          <ProfileButton onClick={clickProfile}>Profile</ProfileButton>
        </Link>
        <p />
        <Link to="/about">
          <ProfileButton onClick={clickAbout}>About</ProfileButton>
        </Link>
      </div>
      <div className="card loginblock mx-auto">
        <div className="card-body">
          <LoginForm onClick={clickRegister}></LoginForm>
        </div>
      </div>
      <Button onClick={clickGetTest}>test</Button>
    </div>
  );
}
export default App;
