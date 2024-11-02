import Cookies from "js-cookie";

export const tokenHeader = () => {
  return {
    headers: { Authorization: `Bearer ${Cookies.get("token") as string}` },
  };
};
