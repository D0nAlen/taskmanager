import moment from "moment";

// const castTimeFormat = (value) => {
//   return value < 10 ? `0${value}` : String(value);
// };

export const formatTime = (date) => {
  // const hours = castTimeFormat(date.getHours() % 12);
  // const minutes = castTimeFormat(date.getMinutes());

  // return `${hours} : ${minutes}`;
  return moment(date).format(`hh:mm`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

export const isRepeating = (repeatingDays) => {
  return Object.values(repeatingDays).some(Boolean);
};

export const isOverdueDate = (dueDate, date) => {
  return dueDate < date && !isOneDay(date, dueDate);
  // return dueDate < date && !!isOneDay(date, dueDate);
};

export const isOneDay = (dateA, dateB) => {
  const convertedDateA = new Date(dateA * 1000);
  const convertedDateB = new Date(dateB * 1000);

  const a = moment(convertedDateA);
  const b = moment(convertedDateB);
  return a.diff(b, `days`) === 0 && convertedDateA.getDate() === convertedDateB.getDate();
};