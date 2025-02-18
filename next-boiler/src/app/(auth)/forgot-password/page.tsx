"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Link from "next/link";
import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const submit = () => {
    console.log("Button clicked!");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
  return (
    <div className="flex flex-col justify-center">
      <Heading
        level="h1"
        weight="bold"
        className="text-foundation-100 text-center "
      >
        Forgot Password
      </Heading>
      <Heading level="h3" weight="regular" className="mt-8 mb-2">
        Enter your email
      </Heading>
      <Input
        id="email"
        type="email"
        width="100%"
        placeholder="Enter your Email"
        value={email}
        defaultValue="user@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        title="Forgot Password"
        width="w-full"
        height="h-12"
        size="md"
        variant="primary"
        className="mt-4"
        hover="hover:bg-foundation-200"
        onClick={() => handleSubmit}
      ></Button>
      <Heading level="h3" weight="regular" className="mt-8 mb-2">
        Remember your password?{" "}
        <Link href="/login" className="text-foundation-100 font-bold">
          Login here
        </Link>
      </Heading>
    </div>
  );
}
