import { authAxios } from "../config/axios";
import Cookies from "js-cookie";

export const createToken = async (item: string) => {
  try {
    const response = await authAxios.post("/createtoken", [item]);
    Cookies.set("token", response.data, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
    if (response.status === 202) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return true;
  }
};

export const changePass = async (item: string) => {};
