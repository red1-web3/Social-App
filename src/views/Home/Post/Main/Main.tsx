import Image from "next/image";
import React from "react";

function Main() {
  return (
    <main>
      {/* Post Main Image --Start-- */}
      <div className="relative h-[400px]">
        <Image
          src={"/illustration.jpg"}
          alt="illustration image"
          fill
          sizes="border"
          className="object-cover"
        />
      </div>
      {/* Post Main Image --End-- */}
    </main>
  );
}

export default Main;
