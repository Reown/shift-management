import { gettest } from "../services/OldPerson";
import Cookies from "js-cookie";

function AboutPage() {
  gettest(Cookies.get("token") as string)
    .then((res) => {
      console.log("test2" + res);
    })
    .catch((err) => {}); //faiil redirect to homepage

  return (
    <div>
      <h1>about page</h1>
      <p>{Cookies.get("token")}</p>
    </div>
  );
}

export default AboutPage;
