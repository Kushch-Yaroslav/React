import React from "react";
import styles from "./Messages.module.css";
import { format } from "date-fns";

const Message = (props) => {
  const {
    messages: {
      body,
      id,
      date,
      postId,
      user: { username, imageSrc },
    },
  } = props;

  const isMyMessage = 30 < id;
  const messageWrapper = isMyMessage
    ? `${styles["message-wrapper"]} ${styles["my-message"]}`
    : styles["message-wrapper"];
  const myTextWrapper = isMyMessage
    ? `${styles["text-wrapper"]} ${styles["my-text-wrapper"]}`
    : styles["text-wrapper"];

  const messageDate = date ? date : new Date();
  const imgSrc = imageSrc
    ? imageSrc
    : "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg";

  return (
    <section className={messageWrapper}>
      <img
        className={styles["message-author-image"]}
        src={imgSrc}
        alt="Avatar"
      ></img>
      <div className={myTextWrapper}>
        <span className={styles["username"]}>{username}</span>
        <span className={styles["message-body"]}>{body}</span>
        <span className={styles["message-date"]}>
          {format(messageDate, "hh:mm")}
        </span>
      </div>
    </section>
  );
};

export default Message;
