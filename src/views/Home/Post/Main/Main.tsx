import Image from "next/image";
import React from "react";
import Button from "./Buttons/Button";
import { buttons } from "src/constant/Post";

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

      <div className="grid grid-cols-3 border-b-2 _border">
        {buttons.map(({ count, icon, label, activeColor }, i) => (
          <Button
            key={i}
            count={count}
            icon={icon}
            label={label}
            activeColor={activeColor}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
