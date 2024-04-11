import React from "react";
import Week from "../Week";
import { startOfMonth, getYear, getMonth } from "date-fns";

const Month = () => {
  const currentDate = new Date();
  const currentYear = getYear(currentDate);
  const currentMonth = getMonth(currentDate);
  const startOfTheMonth = startOfMonth(new Date(currentYear, currentMonth));

  return (
    <tbody>
      <Week
        year={currentYear}
        week="1"
        startOfMonth={startOfTheMonth}
        month={currentMonth}
      />
      <Week
        year={currentYear}
        week="2"
        startOfMonth={startOfTheMonth}
        month={currentMonth}
      />
      <Week
        year={currentYear}
        week="3"
        startOfMonth={startOfTheMonth}
        month={currentMonth}
      />
      <Week
        year={currentYear}
        week="4"
        startOfMonth={startOfTheMonth}
        month={currentMonth}
      />
      <Week
        year={currentYear}
        week="5"
        startOfMonth={startOfTheMonth}
        month={currentMonth}
      />
    </tbody>
  );
};

export default Month;
