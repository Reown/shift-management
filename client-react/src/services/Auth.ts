import { authAxios } from "../config/axios";
import Cookies from "js-cookie";

export const createToken = async (item: string) => {
  try {
    const response = await authAxios.post("/createtoken", [item]);
    if (response.status === 201) {
      Cookies.set("token", response.data, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
