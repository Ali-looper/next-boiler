"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-white w-[638px] h-auto p-[40px] ">
      <h2 className="text-[25px] font-bold text-center text-[#07224D] leading-[30px]">
        Login
      </h2>
      <p className="text-gray-500 text-center mt-1 mb-5 text-[14px]">
        Please enter your login information
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 mb-4">Email</label>
        <Input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          width="100%"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-4">Password</label>
        <Input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width="100%"
        />
      </div>

      <Button
        title="Login"
        onClick={handleLogin}
        width="w-full"
        height="h-12"
        size="md"
        variant="primary"
        className="mt-4"
        hover="hover:bg-foundation-200"
      ></Button>

      <p
        className="text-center text-gray-500 mt-4 text-base leading-5 font-normal"
        style={{ color: "#8A8A95" }}
      >
        Don&apos;t have an account?{" "}
        <span style={{ color: "#296E9F" }}>Create an account</span>
      </p>
    </div>
  );
};

export default Login;
