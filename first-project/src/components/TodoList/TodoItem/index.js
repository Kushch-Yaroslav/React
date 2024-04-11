import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const deleteHandler = () => {
    const { id, deleteCallback } = props;
    deleteCallback(id);
  };

  return (
    <li>
      {props.text} <button onClick={deleteHandler}>X</button>
    </li>
  );
};

TodoItem.defaultProps = {
  text: "Default text",
  deleteCallback: () => {},
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  deleteCallback: PropTypes.func.isRequired,
};

export default TodoItem;
