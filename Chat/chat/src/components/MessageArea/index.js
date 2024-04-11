import React, { useState } from "react";
import styles from "./MessageArea.module.css";

const MessageArea = (props) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendMessage(inputMessage);
    setInputMessage(" ");
  };

  const handlerKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles["form-wrapper"]}>
        <textarea
          value={inputMessage}
          onChange={handleChange}
          className={styles["input"]}
          onKeyDown={handlerKey}
        />
        <button className={styles["sumbit-btn"]} type="submit">
          &#10148;
        </button>
      </form>
    </div>
  );
};

export default MessageArea;
