import { FormEvent, useState } from "react";
import { submitBid } from "../../services/Schedule";
import { LabeledTextField } from "../common/LabeledTextField";
import { LabeledDropDown } from "../common/LabeledDropDown";

const BidForm = () => {
  const [day, setDay] = useState<string>("");
  const [selectedShift, setSelectedShift] = useState("none");
  const shifts = [
    "Morning 8-11",
    "Midday 11-15",
    "Afternoon 15-19",
    "Evening 19-22",
  ];

  const clickSubmitBid = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedShift !== "none") {
      const res = await submitBid([selectedShift, day]);
    }
  };

  return (
    <form className="row g-3 formbody" onSubmit={clickSubmitBid}>
      <LabeledDropDown
        children={["Choose a shift", selectedShift]}
        shifts={shifts}
        onClick={(e) => {
          setSelectedShift(e);
        }}
      ></LabeledDropDown>
      <LabeledTextField
        children={["Choose a date", "date"]}
        onChange={(e) => {
          setDay(e);
        }}
      ></LabeledTextField>
      <button type="submit" className="btn">
        Submit bid
      </button>
    </form>
  );
};

export default BidForm;
