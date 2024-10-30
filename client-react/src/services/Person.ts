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
