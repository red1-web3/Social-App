import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Image src={"/logo.svg"} alt="logo" height={50} width={170} />
    </div>
  );
}

export default Logo;
