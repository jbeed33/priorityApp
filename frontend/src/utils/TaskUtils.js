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
  console.log(returnDate);
  return returnDate;
}
