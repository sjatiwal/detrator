import React from "react";
import Link from "next/link";
const pages = () => {
  return (
    <div className="flex justify-center items-center h-screen text-2xl underline underline-offset-8">
      <Link href={"/post"}>Visit Post page</Link>
    </div>
  );
};

export default pages;
