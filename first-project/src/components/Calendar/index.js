import React, { Component } from "react";
import CurrentDay from "./CurrentDay";
import CalendarBody from "./CalendarBody";
import CalendarContext from "./CalendarContext";
import styles from "./Calendar.module.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: new Date(),
    };
  }
  render() {
    const { currentDay } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.calendarBody}>
          <CalendarContext.Provider value={currentDay}>
            <CurrentDay />
            <CalendarBody />
          </CalendarContext.Provider>
        </div>
      </div>
    );
  }
}

export default Calendar;
