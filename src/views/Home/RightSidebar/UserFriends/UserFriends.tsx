import ChevronDown from "@components/Icons/ChevronDown";
import React from "react";
import UserFriendsList from "./UserFriendsList";

function UserFriends() {
  return (
    <div className="_border rounded-md dark:bg-dark-600">
      <button className="flex items-center justify-between dark:text-light-200 w-full py-2.5 px-3.5">
        <h5 className="font-medium text-lg">My Friends</h5>
        <span>
          <ChevronDown />
        </span>
      </button>

      <ul className="px-3.5">
        <UserFriendsList />
        <UserFriendsList />
        <UserFriendsList />
        <UserFriendsList />
      </ul>
    </div>
  );
}

export default UserFriends;
