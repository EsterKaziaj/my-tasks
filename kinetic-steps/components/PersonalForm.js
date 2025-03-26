// components/PersonalForm.js
import { useState } from "react";
import { useRouter } from "next/router";
import { getFormData, saveFormData } from "../utils/formState";

export default function PersonalForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

  const handleSubmit = () => {
    const prev = getFormData();
    saveFormData({ ...prev, ...form });
    router.push("/step3");
  };

  return (
    <div className="container">
      <h1>Add Your Personal Details</h1>
      {["firstName", "lastName", "email", "phone"].map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field.replace(/([A-Z])/g, " $1")}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
        />
      ))}
      <div className="consent">
        <input type="checkbox" required /> <span>I agree to be contacted</span>
      </div>
      <button onClick={handleSubmit}>Submit Your Details →</button>
    </div>
  );
}
