import React from "react";
import Day from "../Day";
import { startOfWeek, addDays, parseISO } from "date-fns";
import styles from "../../Calendar.module.css";
const Week = (props) => {
  const { year, week, startOfMonth } = props;

  const arr = new Array(7).fill(null).map((el, index) => {
    const dayToAdd = addDays(startOfMonth, (week - 1) * 7 + index);
    return <Day key={index} day={dayToAdd} />;
  });

  return <tr className={styles.calendarBody}>{arr}</tr>;
};

export default Week;

// const startDate = startOfWeek(parseISO(`${year}-11-01`), { weekStartsOn: 1 });
