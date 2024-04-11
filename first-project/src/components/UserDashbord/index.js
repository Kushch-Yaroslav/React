import React, { useEffect, useState } from "react";
import UsersList from "../UsersList";
import Spiner from "../Spiner";
import { getUsers } from "../../api";

const UserDashboard = (props) => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setFetching] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    getUsers({ page })
      .then((data) => {
        setUser(data.results);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  const next = () => {
    setPage(page + 1);
  };

  const prev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <section>
      <button onClick={prev}>Prev page</button>
      <span>{page}</span>
      <button onClick={next}>Next page</button>
      {error && <div>Oops! Something goes wrong!</div>}
      {users && <UsersList users={users} setUser={setUser} />}
      {isFetching && <Spiner />}
    </section>
  );
};

export default UserDashboard;
