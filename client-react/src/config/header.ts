import Cookies from "js-cookie";

const tokenHeader = () => {
  return {
    headers: { Authorization: `Bearer ${Cookies.get("token") as string}` },
  };
};

export default tokenHeader;
