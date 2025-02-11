"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={() => alert("Sign Up Clicked")}
        // width="w-50"
        variant="outline"
        size="md"
        height="h-16"
        className="font-bold text-1xl"
        disabled={false}
        iconPrefix="check" >
        Sign Up
      </Button>
    </div>
  );
}
