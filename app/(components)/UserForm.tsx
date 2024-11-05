"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users/", {
      method: "POST",
      body: JSON.stringify({
        formData: { name: name, email: email, password: password },
      }),
      headers: { "content-type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.mesage);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required={true}
          value={name}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          value={email}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          value={password}
          className="m-2 bg-slate-400 rounded"
        />
        <input
          type="submit"
          value="Create User"
          className="bg-blue-300 hover:bg-blue-100"
        />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
