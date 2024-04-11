import React, { Component } from "react";
import { getStore } from "../api";
import Spiner from "../../Spiner";

class StoreDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isFetching: true,
    };
  }

  mapProducts = () => {
    const { list } = this.state;
    return list.map((storeObj) => (
      <li key={storeObj.id}>
        {storeObj.title} --- {storeObj.category} --- Price:{storeObj.price}$
      </li>
    ));
  };

  componentDidMount() {
    getStore()
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
          isFetching: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching store data:", error);
      });
  }

  render() {
    const { isFetching, list } = this.state;
    return (
      <div>
        {isFetching && <Spiner />}
        <ul>{this.mapProducts()}</ul>
      </div>
    );
  }
}

export default StoreDashboard;
