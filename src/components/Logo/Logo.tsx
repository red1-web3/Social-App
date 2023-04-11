import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/logo-blue.svg"} alt="logo" height={50} width={170} />
      </Link>
    </div>
  );
}

export default Logo;
