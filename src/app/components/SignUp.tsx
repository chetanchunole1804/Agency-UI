"use client";

import { useState } from "react";

const Signup = ({login}:any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        setFormData({ name: "", email: "", password: "" }); // reset form
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      setError("Error connecting to the server.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-gray-200 px-8 py-8 rounded-md h-80 w-80 border border-gray-400">
      <h2 className="text-center font-semibold pb-2 text-2xl">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-2 py-1 outline-none"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-1 outline-none"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-2 py-1 outline-none"
            required
          />
        </div>
        <p className="text-right text-sm text-gray-500 cursor-pointer hover:underline hover:text-gray-600" onClick={login}>Sign</p>
        <button type="submit" className="py-1 px-2 rounded mt-2 bg-gray-300">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
      </div>
    </div>
  );
};

export default Signup;
