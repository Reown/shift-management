import { scheduleAxios } from "../config/axios";
import { tokenHeader } from "../config/header";

export const getSchedule = async () => {
  try {
    const res = await scheduleAxios.get("/getschedule", tokenHeader());
    if (res.status === 200) {
      return Object.keys(res.data.sortFull).map((key) => ({
        date: key,
        shift: res.data.sortFull[key],
      }));
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
  }
};

export const submitBid = async (item: string[]) => {
  try {
    const res = await scheduleAxios.post("/submitbid", item, tokenHeader());
    if (res.status === 201) {
      console.log("Success: " + res.data.message);
      return true;
    }
  } catch (err: any) {
    if (err.response.status) {
      console.log("Error: " + err.response.data.error);
    }
    console.log(err);
  }
};
