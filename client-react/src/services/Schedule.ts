import { scheduleAxios } from "../config/axios";
import { tokenHeader } from "../config/header";

export const submitBid = async (item: string[]) => {
  try {
    const res = await scheduleAxios.post("/submitbid", item, tokenHeader());
    if (res.status === 200) {
      console.log("Success: " + res.data.message);
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
  }
};
