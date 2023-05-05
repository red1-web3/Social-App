import DropdownWrapper from "@components/Dropdown/Dropdown";
import DropdownList from "@components/Dropdown/DropdownList";
import UserFriendsList from "./UserFriendsList";

function UserFriends() {
  return (
    <div className="_border rounded-md dark:bg-dark-600">
      <DropdownWrapper label="My Friends">
        {[1, 2, 3, 4].map((_, i) => (
          <DropdownList key={i} index={i}>
            <UserFriendsList />
          </DropdownList>
        ))}
      </DropdownWrapper>
    </div>
  );
}

export default UserFriends;
