import React from "react";
import { withUser } from "../../../HOCs/withUser";

const UserMenu = (props) => {
  const { user, setUser } = props;
  if (!Object.keys(user).length) {
    return null;
  }
  return (
    <div style={{ border: "2px solid red" }}>
      <img
        src={user.avatar}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
      <button onClick={setUser}>logOut</button>
    </div>
  );
};

const wrappedMenu = withUser(UserMenu);

export default wrappedMenu;
