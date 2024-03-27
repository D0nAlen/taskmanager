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
  // console.log(moment(date).format(`DD MMMM`));
  return moment(date).format(`DD MMMM`);
};

export const isRepeating = (repeatingDays) => {
  // console.log(repeatingDays);
  return Object.values(repeatingDays).some(Boolean);
};

// 1)
export const isOverdueDate = (dueDate, date) => {
  console.log(dueDate,"____",date );
  return dueDate < date && !isOneDay(date, dueDate);
  // return dueDate < date && !!isOneDay(date, dueDate);
};

// 1)даты в разном формате, привести к одному виду(DateA к виду DateB)
export const isOneDay = (dateA, dateB) => {
  // console.log( dateA.getDate(),"___", dateB.getDate());

  const a = moment(dateA);
  const b = moment(dateB);

  // return dateA.getDate() === dateB.getDate();
  return a.diff(b, `days`) === 0 && dateA.getDate() === dateB.getDate();
};