import { taskAxios } from "../config/axios";

export const newtask = async (item: string[]) => {
  try {
    const response = await taskAxios.post("/new", item);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
};
