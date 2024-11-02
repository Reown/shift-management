import { personAxios } from "../config/axios";
import Cookies from "js-cookie";

export const register = async (item: string) => {
  try {
    const res = await personAxios.post("/register", [item]);
    if (res.status === 201) {
      console.log("Success: " + res.data.message);
      return "/login";
    }
  } catch (err: any) {
    if (err.response.status === 409) {
      console.log("Error: " + err.response.data.error);
    } else {
      console.log(err);
    }
  }
};

export const login = async (item: string[]) => {
  try {
    const response = await personAxios.post("/login", item);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (err) {
    Cookies.remove("token");
    console.log(err);
  }
};

export const newInfo = async (item: string[]) => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get("token") as string}` },
  };
  try {
    const response = await personAxios.post("/newinfo", item, config);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (err: any) {
    if (err.status === 409) {
      return true;
    }
    console.log(err);
  }
};
