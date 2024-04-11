import React from "react";
import Month from "./Month";
import { getYear, getMonth, format } from "date-fns";
import styles from "../Calendar.module.css";
const currentDate = new Date();
const currentYear = getYear(currentDate);
const currentMonth = getMonth(currentDate) + 1;
const currentMonthDate = new Date(currentYear, currentMonth - 1);

const CalendarBody = () => {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        {" "}
        {format(currentMonthDate, "MMMM")} {currentYear}
      </div>
      <table className={styles.content}>
        <thead>
          <tr>
            {weekDays.map((d) => (
              <td className={styles.thead}>{d}</td>
            ))}
          </tr>
        </thead>
        <Month />
      </table>
    </div>
  );
};

export default CalendarBody;
