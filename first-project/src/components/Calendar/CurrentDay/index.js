import React from "react";
import CalendarContext from "../CalendarContext";
import { format } from "date-fns";
import styles from "../Calendar.module.css";

const CurrentDay = (props) => {
  return (
    <CalendarContext.Consumer>
      {(day) => {
        return (
          <div className={styles.wrapperCurrentDay}>
            <div className={styles.header}>
              <p className={styles.currentDay}>{format(day, "cccc")}</p>
            </div>
            <div className={styles.content}>
              <p className={styles.currentDayNumber}>{format(day, "d")}</p>
            </div>
          </div>
        );
      }}
    </CalendarContext.Consumer>
  );
};

export default CurrentDay;
