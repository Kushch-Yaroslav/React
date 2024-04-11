import React, { useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import Message from "./Messages";

const Chat = (props) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {props.messages.map((obj) => (
        <Message messages={obj} key={obj.id} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default Chat;
