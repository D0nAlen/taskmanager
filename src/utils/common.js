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