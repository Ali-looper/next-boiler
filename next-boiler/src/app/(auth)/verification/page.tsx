"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import React, { useState, useEffect } from "react";
import OTPInput from "react-otp-input";

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [disableResend, setDisableResend] = useState(true);

  useEffect(() => {
    setDisableResend(true);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else {
      setDisableResend(false);
    }
  }, [timer]);

  const handleOtpSubmit = () => {
    if (!otp || otp.length < 6) {
      console.error("OTP is required and should be 6 digits");
      return;
    }
    // console.log("OTP:", otp);
  };

  const handleResendOtp = () => {
    setDisableResend(true);
    setTimer(60);
    resendOtpHandle();
  };

  const resendOtpHandle = () => {
    // console.log("Resending OTP...");
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <Heading
        level="h1"
        weight="bold"
        className="text-foundation-100 text-center"
      >
        OTP Verification
      </Heading>
      <Heading level="h3" weight="regular" className="mt-8 mb-2">
        Enter the OTP sent to your email
      </Heading>
      <div className="flex justify-center">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              className="lg:p-4 p-2 m-1 lg:h-16 h-12 w-12 border border-dark-200 text-foundation-100 font-extrabold text-xl text-center focus:outline-none"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleOtpSubmit();
                }
              }}
            />
          )}
          inputStyle={{
            width: "3rem",
            height: "3rem",
            fontSize: "1.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
          containerStyle="flex justify-center gap-2 mb-4"
        />
      </div>
      <Button
        title="Verify OTP"
        width="w-full"
        height="h-12"
        size="md"
        variant="primary"
        className="mt-4"
        hover="hover:bg-foundation-200"
        onClick={handleOtpSubmit}
      />

      <Heading level="h3" weight="regular" className="mt-8 mb-2">
        Didn't receive email yet?{" "}
        <span
          className={`text-foundation-100 font-bold  ${
            disableResend ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={disableResend ? null : handleResendOtp}
        >
          Resend OTP {disableResend && `in ${timer}s`}
        </span>
      </Heading>
    </div>
  );
}
