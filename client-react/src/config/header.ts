import Cookies from "js-cookie";

export const tokenHeader = {
  headers: { Authorization: `Bearer ${Cookies.get("token") as string}` },
};
