import React from "react";
import Image from "next/image";
import HtalLogo from "@/assets/htal-logo.webp";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F5FDFF] min-h-dvh flex justify-center items-center">
      <div className="flex flex-col gap-[30px] 2xs:gap-[45px] items-center my-10 xs:my-20 w-screen">
        <div className="aspect-[170/67] w-[80%] 2xs:w-[150px] xs:w-[170px]">
          <Image src={HtalLogo} alt="Htal logo" className="w-full" />
        </div>
        <div className="bg-white rounded-[20px] px-3 py-5 w-[90%] 2xs:p-5 xs:w-[80%] xs:p-10 md:w-[638px] min-h-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
