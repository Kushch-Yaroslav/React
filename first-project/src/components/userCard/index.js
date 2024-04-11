import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import "./style.css";
import "./StyleSCSS.scss";

const UserCard = (props) => {
  const [user, setUser] = useState({
    name: {
      first: "",
      last: "",
    },
    email: "",
    picture: { large: "" },
  });

  useEffect(() => {
    const {
      user: {
        name: { first, last },
        email,
        picture: { large },
      },
    } = props;
    setUser({
      name: {
        first,
        last,
      },
      email,
      picture: { large },
    });
  }, [props]);

  return (
    <div className="card-wrapper">
      <div className="image-wrapper">
        <img className="avatar" src={user.picture.large} />
      </div>
      <h2>
        {user.name.first} {user.namelast}
      </h2>
      <p className="desc">{user.email}</p>
      <button>Connect</button>
    </div>
  );
};

export default UserCard;
