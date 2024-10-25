import { oldPersonAxios } from "../config/axios";
import Cookies from "js-cookie";

export const register = async (item: string[]) => {
  try {
    const response = await oldPersonAxios.post("/register", item);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (item: string[]) => {
  try {
    const response = await oldPersonAxios.post("/login", item);
    Cookies.set("token", response.data, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    Cookies.remove("token");
    return false;
  }
};

export const gettest = async (item: string) => {
  const config = {
    headers: { Authorization: `Bearer ${item}` },
  };
  try {
    const response = await oldPersonAxios.get("/gettest", config);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
