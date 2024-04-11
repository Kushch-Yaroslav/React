import React from "react";
import { format, isSameDay, getMonth } from "date-fns";
import CalendarContext from "../../CalendarContext";
import styles from "./CurrentDay.module.css";

const Day = (props) => {
  return (
    <CalendarContext.Consumer>
      {(currentDay) => {
        const isToday = isSameDay(props.day, currentDay, {
          day: true,
          year: true,
        });
        const theDay = format(props.day, "d");
        return (
          <td className={isToday ? styles.currentDay : ""}>
            {currentDay ? theDay : " "}
          </td>
        );
      }}
    </CalendarContext.Consumer>
  );
};

export default Day;

// const currentDayOfMonth = currentDay.getDate();
