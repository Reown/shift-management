import { authAxios } from "../config/axios";
import Cookies from "js-cookie";
import { tokenHeader } from "../config/header";

export const createToken = async (item: string) => {
  try {
    const res = await authAxios.post("/createtoken", [item]);
    if (res) {
      Cookies.set("token", res.data, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });
      return true;
    }
    return false;
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
    return false;
  }
};

export const getTokenRole = async () => {
  try {
    const res = await authAxios.get("/gettokenrole", tokenHeader());
    if (res.status === 200) {
      return res.data;
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
  }
};
