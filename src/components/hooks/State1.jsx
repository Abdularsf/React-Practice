import { useState } from "react";

export const MultiInput = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <input 
        type="email" 
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input 
        type="password" 
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
    </>
  );
};