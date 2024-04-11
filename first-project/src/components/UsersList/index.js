import React, { useState, useEffect } from "react";
import UserCard from "../userCard";

function UsersList(props) {
  const [isSort, setSort] = useState(true);
  const [filterValue, setFilterValue] = useState("");

  const filterList = () => {
    return props.users.filter(({ name: { first, last } }) => {
      return (
        first.toLowerCase().includes(filterValue) ||
        last.toLowerCase().includes(filterValue)
      );
    });
  };

  const userMap = (usersArray) =>
    usersArray.map((userObj) => (
      <UserCard user={userObj} key={userObj.login.uuid} />
    ));

  const sortUsers = () => {
    const newUsers = [...props.users];
    newUsers.sort((a, b) => (a.name.first > b.name.first && isSort ? 1 : -1));
    setSort(!isSort);
    props.setUser(newUsers);
  };

  const changeHandler = ({ target: { name, value } }) => {
    setFilterValue(value);
    filterList();
  };

  return (
    <>
      <input
        type="text"
        value={filterValue}
        name="filterValue"
        onChange={changeHandler}
      />
      <button onClick={sortUsers}>Sorted</button>
      <div className="card-container">{userMap(filterList())}</div>
    </>
  );
}

export default UsersList;
