import classNames from "classnames";
import React from "react";

function Button({
  count,
  icon,
  label,
  activeColor,
}: {
  icon: React.ReactNode;
  label: string;
  count: number | string;
  activeColor?: boolean;
}) {
  return (
    <button
      className="dark:text-dark-100 dark:hover:text-dark-50 duration-200 py-4 flex justify-center items-center gap-x-2"
      // onClick={clickedLike}
    >
      <div
        className={classNames(
          "w-fit flex items-center gap-x-1.5 text-sm",
          activeColor && "text-primary"
        )}
      >
        <span className="w-5">{icon}</span>
        <span>{label}</span>
      </div>

      <div
        className={classNames(
          "px-2 py-0.5 rounded-2xl text-xs text-light-200 !font-Lato",
          activeColor ? "bg-primary" : "bg-dark-300"
        )}
      >
        {count}
      </div>
    </button>
  );
}

export default Button;
