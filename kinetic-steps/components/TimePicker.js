// components/TimePicker.js
import { useState } from "react";
import { useRouter } from "next/router";
import { saveFormData } from "../utils/formState";

export default function TimePicker() {
  const [chosenSlot, setChosenSlot] = useState("");
  const navigate = useRouter();

  const proceedToNext = () => {
    if (chosenSlot) {
      saveFormData({ time: chosenSlot });
      navigate.push("/step2");
    }
  };

  const availableTimes = [
    "8 AM CST",
    "9 AM CST",
    "10 AM CST",
    "11 AM CST",
    "12 PM CST",
    "1 PM CST",
    "2 PM CST",
    "3 PM CST",
    "4 PM CST",
    "5 PM CST",
  ];

  return (
    <div className="container">
      <h1>What Is The Best Time To Reach You?</h1>
      <select
        className="styledSelect"
        value={chosenSlot}
        onChange={(e) => setChosenSlot(e.target.value)}
      >
        <option value="">Choose Your Time</option>
        {availableTimes.map((slot, i) => (
          <option key={i} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      <small>(All times are in CST)</small>
      <button onClick={proceedToNext}>CONTINUE →</button>
    </div>
  );
}
