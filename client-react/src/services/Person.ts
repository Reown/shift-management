import Cookies from "js-cookie";
import { personAxios } from "../config/axios";
import { tokenHeader } from "../config/header";

export const register = async (item: string[]) => {
  try {
    const res = await personAxios.post("/register", item);
    if (res.status === 201) {
      console.log("Success: " + res.data.message);
      return "/login";
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
  }
};

export const login = async (item: string[]) => {
  try {
    const res = await personAxios.post("/login", item);
    if (res.status === 200) {
      console.log("Success: " + res.data.message);
      return "/dashboard";
    } else if (res.status === 203) {
      console.log("Success: " + res.data.message);
      return "/setup";
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
  }
};

export const newInfo = async (item: string[]) => {
  try {
    const res = await personAxios.post("/newinfo", item, tokenHeader());
    if (res.status === 201) {
      console.log("Success: " + res.data.message);
      return "/dashboard";
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
      if (err.response.status === 409) {
        return "/dashboard";
      }
      console.log(err);
    }
  }
};
