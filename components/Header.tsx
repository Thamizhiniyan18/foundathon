import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-[80px] flex flex-row justify-between items-center px-10">
      <div className="w-[100px] h-16 flex justify-center items-center">
        <h1 className="text-primary text-xl font-extrabold">Foundathon</h1>
      </div>
      <div className="flex flex-row justify-between items-center [&_a]:text-primary">
        <div className="w-[500px] flex flex-row justify-evenly items-center">
          <Link href="/">Home</Link>
          <Link href="/malware">Malware</Link>
          <Link href="/vapt">VAPT</Link>
          <Link href="/about">About</Link>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
