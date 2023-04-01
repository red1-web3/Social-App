import React from "react";
import CommunityList from "./CommunityList";

function Community() {
  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <h5 className="dark:text-white font-medium">My community</h5>

        <span className="dark:bg-dark-400 rounded-full text-xs text-white aspect-square w-6 flex items-center justify-center">
          29
        </span>
      </header>

      <main>
        <ul className="space-y-4">
          <CommunityList />
          <CommunityList />
          <CommunityList />
          <CommunityList />
        </ul>
      </main>
    </div>
  );
}

export default Community;
