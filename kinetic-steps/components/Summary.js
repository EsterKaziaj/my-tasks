// components/Summary.js
import { getFormData } from "../utils/formState";
import { useRouter } from "next/router";

export default function Summary() {
  const collected = getFormData();
  const router = useRouter();

  return (
    <div className="container">
      <h1>Confirmation</h1>
      <ul>
        <li>
          <strong>Time:</strong> {collected.time}
        </li>
        <li>
          <strong>First Name:</strong> {collected.firstName}
        </li>
        <li>
          <strong>Last Name:</strong> {collected.lastName}
        </li>
        <li>
          <strong>Email:</strong> {collected.email}
        </li>
        <li>
          <strong>Phone:</strong> {collected.phone}
        </li>
      </ul>
      <button onClick={() => router.push("/")}>← Return to Home</button>
    </div>
  );
}
