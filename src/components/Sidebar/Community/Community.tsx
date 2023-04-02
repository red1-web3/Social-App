import React from "react";
import CommunityList from "./CommunityList";
import SectionHeader from "../SectionHeader";

function Community() {
  return (
    <div>
      <SectionHeader title="My community" notification={29} />
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
