import Cookies from "js-cookie";
import { personAxios } from "../config/axios";

export const register = async (item: string) => {
  try {
    const response = await personAxios.post("/register", [item]);
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

export const insertInfo = async (item: string[]) => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get("token") as string}` },
  };
  try {
    const response = await personAxios.post("/insertinfo", item, config);
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
