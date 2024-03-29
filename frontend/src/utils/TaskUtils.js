import { format } from "date-fns";

export const PriorityLevelOptions = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
  NONE: 0,
};

export function changePriortyToName(priorityLevel) {
  if (priorityLevel === 3) return "High";
  if (priorityLevel === 2) return "Medium";
  if (priorityLevel === 1) return "Low";
  if (priorityLevel === 0) return "None";
}

export function changeMilisecondsToDayMonthAndYear(seconds, dateFormat) {
  return seconds != null ? format(new Date(seconds), dateFormat) : " ";
}

export function changeDateToFormatYearMonthDay(date) {
  console.log("Date: ", date);
  let returnDate = format(date, "yyyy-MM-dd");
  console.log("Return date: ", returnDate);
  return returnDate;
}

export function changeDateToFormatMonthDayYear(date) {
  console.log("Date: ", date);
  let returnDate = format(date, "MM/dd/yyyy");
  console.log("Return date: ", returnDate);
  return returnDate;
}

export function parseDate(date) {
  console.log(date);
  return {
    month: parseInt(date.toString().substring(5, 7)) - 1,
    day: parseInt(date.toString().substring(8, 10)), // need to do an offset
    year: parseInt(date.toString().substring(0, 4)),
  };
}
