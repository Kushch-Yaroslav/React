import React, { useState, useEffect } from "react";
import useData from "../../hooks/useData";
import { getUser } from "../../api/user";
const UserLoader = (props) => {
  const { data, isFetching, error } = useData(getUser);
  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
};

export default UserLoader;
