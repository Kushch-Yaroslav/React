import React, { Component } from "react";
import UsersList from "../UsersList";
import Spiner from "../Spiner";
import { getUsers } from "../../api";

class UserDasasdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: true,
      page: 1,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  getData = () => {
    const { page } = this.state;
    getUsers({ page })
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  };

  next = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  prev = () => {
    const { page } = this.state;
    if (page !== 1) {
      this.setState({
        page: page - 1,
      });
    }
  };

  render() {
    const { users, error, isFetching, page } = this.state;

    return (
      <section>
        <button onClick={this.prev}>Prev page</button>
        <span>{page}</span>
        <button onClick={this.next}>Next page</button>
        {error && <div>Oops! Something goes wrong!</div>}
        {users && <UsersList users={users} />}
        {isFetching && <Spiner />}
      </section>
    );
  }
}

export default UserDasasdd;
