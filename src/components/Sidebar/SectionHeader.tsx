import React from "react";

function SectionHeader({
  notification,
  title,
}: {
  title: string;
  notification: string | number;
}) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h5 className="dark:text-white font-medium">{title}</h5>
      <span className="dark:bg-dark-400 rounded-full text-xs text-white aspect-square w-6 flex items-center justify-center">
        {notification}
      </span>
    </header>
  );
}

export default SectionHeader;
