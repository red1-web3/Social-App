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

      <div className="grid grid-cols-3">
        <button className="text-light-200"></button>
      </div>
    </main>
  );
}

export default Main;
