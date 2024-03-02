import React from "react";
import Link from "next/link";

const Card = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className="w-[300px] h-[300px] flex justify-center items-center rounded-md border-2 border-primary m-2 cursor-pointer"
    >
      <h1>{title}</h1>
    </Link>
  );
};

export default Card;
