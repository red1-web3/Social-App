import React from "react";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import UpComingEventList from "./UpComingEventList";

function UpComingEvents() {
  return (
    <div>
      <SectionHeader title="Up coming events" notification={17} />
      <main>
        <ul className="space-y-4">
          <UpComingEventList />
          <UpComingEventList />
          <UpComingEventList />
          <UpComingEventList />
        </ul>
      </main>
    </div>
  );
}

export default UpComingEvents;
