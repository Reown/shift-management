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
    console.log(err);
  }
};

export const getInfo = async (item: string) => {
  try {
    const response = await personAxios.post("/getinfo", item);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
};
