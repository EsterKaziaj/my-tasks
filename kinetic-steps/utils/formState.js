// utils/formState.js
export function saveFormData(data) {
  if (typeof window !== "undefined") {
    localStorage.setItem("formData", JSON.stringify(data));
  }
}

export function getFormData() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : {};
  }
  return {};
}
