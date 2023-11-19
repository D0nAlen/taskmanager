const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours} : ${minutes}`;
};

// export const formatDate = (date) => {
//   const day = castTimeFormat(Date.parse(date));
//   // const month = castTimeFormat(date.getMinutes());

//   return day;
// };